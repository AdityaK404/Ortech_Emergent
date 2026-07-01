export default function SectionHeader({ eyebrow, title, kicker, align = "left", light = false }) {
  const containerCls = align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl";
  const titleCls = light
    ? "mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-tight text-white text-balance"
    : "mt-3 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-tight text-neutral-900 text-balance";
  const kickerCls = light
    ? "mt-5 text-[15px] leading-relaxed text-white/65 text-pretty"
    : "mt-5 text-[15px] leading-relaxed text-neutral-600 text-pretty";
  return (
    <div className={containerCls}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={titleCls}>{title}</h2>
      {kicker && <p className={kickerCls}>{kicker}</p>}
    </div>
  );
}
