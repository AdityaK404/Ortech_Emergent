export default function SectionHeader({ eyebrow, title, kicker, align = "left", light = false }) {
  const containerCls = align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl";
  const titleCls = light
    ? "mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-white text-balance"
    : "mt-4 font-display font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-navy-900 text-balance";
  const kickerCls = light
    ? "mt-5 text-[15px] leading-relaxed text-white/65 text-pretty"
    : "mt-5 text-[15px] leading-relaxed text-muted-foreground text-pretty";
  return (
    <div className={containerCls}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={titleCls}>{title}</h2>
      {kicker && <p className={kickerCls}>{kicker}</p>}
    </div>
  );
}
