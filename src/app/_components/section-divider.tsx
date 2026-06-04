type Props = {
  label?: string;
};

export function SectionDivider({ label }: Props) {
  if (label) {
    return (
      <div className="flex items-center gap-4 py-2 text-white/20 text-[10px] tracking-[0.2em] uppercase max-w-screen-xl mx-auto px-5">
        <div className="flex-1 border-t border-white/5" />
        <span className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-vamos-yellow/30">✦</span>
          {label}
          <span className="text-vamos-yellow/30">✦</span>
        </span>
        <div className="flex-1 border-t border-white/5" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-vamos-yellow/25 select-none">
      <span>✦</span>
      <span>✦</span>
      <span>✦</span>
    </div>
  );
}
