export default function SectionHeader({ eyebrow, title, kicker, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="eyebrow"><span className="accent-rule"></span>{eyebrow}</div>
      )}
      <h2 className="mt-4 font-serif text-[34px] md:text-[44px] leading-[1.05] tracking-tight text-primary text-balance">
        {title}
      </h2>
      {kicker && (
        <p className="mt-5 text-[15px] md:text-base leading-relaxed text-muted-foreground text-pretty">
          {kicker}
        </p>
      )}
    </div>
  );
}
