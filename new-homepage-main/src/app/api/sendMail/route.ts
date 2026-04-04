import { EmailOptions, MailProvider } from "@/app/_provider/mailProvider";
import { NextRequest, NextResponse } from "next/server";

/* ── Rate Limiting (IP 기반, 메모리 저장) ── */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;        // 최대 요청 횟수
const RATE_LIMIT_WINDOW = 60000; // 1분 (ms)

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    if (entry.count > RATE_LIMIT_MAX) {
        return true;
    }
    return false;
}

export async function POST(req: NextRequest) {
    try {
        /* ── IP Rate Limiting ── */
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
            req.headers.get("x-real-ip") ??
            "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { message: "너무 많은 요청입니다. 잠시 후 다시 시도해주세요." },
                { status: 429 },
            );
        }

        const body = await req.json();
        const { subject, text, html, _honey } = body;

        /* ── Honeypot: 봇이 채운 숨겨진 필드 감지 ── */
        if (_honey) {
            // 봇으로 판단 — 성공한 척 응답 (봇이 재시도 안 하도록)
            return NextResponse.json(
                { message: "Email sent successfully" },
                { status: 200 },
            );
        }

        const mailProvider = new MailProvider();
        const emailOptions: EmailOptions = {
            to: mailProvider.getUser() ?? "",
            subject,
            text,
            html,
        };

        await mailProvider.sendMail(emailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 },
        );
    }
}
