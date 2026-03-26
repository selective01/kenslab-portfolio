// Marquee.tsx — the scrolling ticker strip that appears below the Hero section
// It continuously scrolls a list of your tech skills from right to left
// The trick: we duplicate the items so the loop is seamless

const items = [
  "Full-Stack Development", "React & Next.js", "Node.js & Express",
  "SaaS Platforms",  "REST APIs",
  "Cloud Infrastructure", "MySQL & PostgreSQL",
];

export default function Marquee() {
  return (
    <div className="border-y border-brand-border bg-brand-surface overflow-hidden py-3.5">
      {/*
        The track holds items twice — once for visible, once for the seamless loop.
        animate-marquee (defined in tailwind.config.ts) moves it continuously left.
      */}
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {/* First copy */}
        {items.map((item, i) => (
          <span key={`a-${i}`} className="flex items-center gap-12">
            <span className="font-akshar text-xs tracking-[0.15em] uppercase text-brand-gray">
              {item}
            </span>
            <span className="text-brand-green-light text-sm">✦</span>
          </span>
        ))}
        {/* Second copy — creates the seamless infinite loop */}
        {items.map((item, i) => (
          <span key={`b-${i}`} className="flex items-center gap-12">
            <span className="font-akshar text-xs tracking-[0.15em] uppercase text-brand-gray">
              {item}
            </span>
            <span className="text-brand-green-light text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
