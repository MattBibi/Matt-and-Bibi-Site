export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        <span className="text-vamos-yellow">Vamos!</span>
        <br />
        Tech Talks
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 max-w-md text-neutral-600 dark:text-slate-300">
        A video podcast with Matt &amp; Bibi exploring technology, open source, and the future of the web.
      </h4>
    </section>
  );
}
