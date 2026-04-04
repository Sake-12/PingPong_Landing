import { cn } from "@/lib/utils";

/**
 * Subtle grid pattern overlay — gives depth to plain sections.
 */
export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none opacity-[0.03]", className)}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

/**
 * Radial glow — a soft colored orb placed behind content.
 * Defaults to the brand teal-green gradient.
 */
export function GlowOrb({
  className,
  color = "from-[#1AFFD1]/25 to-[#A0FF1B]/18",
  size = "w-[600px] h-[600px]",
  blur = "blur-[120px]",
}: {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
}) {
  return (
    <div
      className={cn(
        "absolute rounded-full bg-gradient-to-br pointer-events-none",
        color,
        size,
        blur,
        className
      )}
    />
  );
}

/**
 * Noise overlay — a subtle texture that adds analog warmth.
 * Uses a CSS noise filter for zero-bandwidth impact.
 */
export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.015]",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    />
  );
}

/**
 * Section with alternating subtle background —
 * wraps a section with optional glow, grid, or gradient.
 */
export function DecoratedSection({
  children,
  className,
  variant = "default",
  glowPosition = "center",
  glowColor,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glow" | "grid" | "gradient" | "glow-grid";
  glowPosition?: "center" | "left" | "right" | "top-right" | "top-left" | "bottom-center";
  glowColor?: string;
}) {
  const glowPositionClass = {
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    left: "-left-[200px] top-1/2 -translate-y-1/2",
    right: "-right-[200px] top-1/2 -translate-y-1/2",
    "top-right": "right-0 -top-[200px]",
    "top-left": "left-0 -top-[200px]",
    "bottom-center": "left-1/2 -translate-x-1/2 -bottom-[200px]",
  };

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {(variant === "glow" || variant === "glow-grid") && (
        <GlowOrb
          className={glowPositionClass[glowPosition]}
          color={glowColor}
          size="w-[500px] h-[500px]"
          blur="blur-[150px]"
        />
      )}
      {(variant === "grid" || variant === "glow-grid") && <GridPattern />}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
