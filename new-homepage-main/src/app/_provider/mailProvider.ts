import nodemailer from "nodemailer";

export interface EmailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export class MailProvider {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST ?? "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    getUser() {
        return process.env.SMTP_USER;
    }

    async sendMail(options: EmailOptions) {
        return this.transporter.sendMail({
            from: process.env.SMTP_USER,
            ...options,
        });
    }
}
