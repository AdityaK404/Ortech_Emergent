// Continuous scrolling strip of genuine client logos from /public/IMAGES.
export default function ClientMarquee({ logos = [] }) {
  if (!logos.length) return null;
  const loop = [...logos, ...logos];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="flex w-max animate-marquee items-center">
        {loop.map((src, i) => (
          <div key={`${src}-${i}`} className="flex items-center px-8 md:px-14 shrink-0">
            <img
              src={src}
              alt=""
              className="h-12 md:h-16 w-auto max-w-[150px] md:max-w-[190px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
