type Props = {
  items: string[];
  direction?: "left" | "right";
  variant?: "dark" | "yellow";
};

export function MarqueeBanner({
  items,
  direction = "left",
  variant = "dark",
}: Props) {
  // Duplicate so the loop is seamless: animation moves -50% of total width
  const doubled = [...items, ...items];

  const trackClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const wrapClass =
    variant === "yellow"
      ? "bg-vamos-yellow border-y border-vamos-yellow-dark"
      : "bg-vamos-navy-light border-y border-white/5";

  const textClass =
    variant === "yellow"
      ? "text-vamos-navy"
      : "text-vamos-yellow";

  return (
    <div className={`overflow-hidden py-3 ${wrapClass}`}>
      <div className={`flex whitespace-nowrap w-max ${trackClass}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-[11px] font-bold uppercase tracking-[0.18em] px-5 flex-shrink-0 ${textClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
