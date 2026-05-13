export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full bg-primary/30 blur-[140px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-secondary/30 blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[140px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,oklch(0.1_0.04_270/0.6))]" />
    </div>
  );
}
