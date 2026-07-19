import Image from "next/image";

// Shared interior-page hero. Navy gradient over a supporting image.
export default function PageHero({ eyebrow, title, kicker, image }) {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        </div>
      )}
      <div className="relative container-x pt-24 pb-16 md:pt-32 md:pb-24">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] max-w-4xl text-balance">
          {title}
        </h1>
        {kicker && (
          <p className="mt-6 max-w-2xl text-white/70 text-pretty text-[15px] leading-relaxed">{kicker}</p>
        )}
      </div>
    </section>
  );
}
