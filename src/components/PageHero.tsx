export function PageHero({
  title,
  body,
  imageUrl,
}: {
  title: string;
  body?: string;
  imageUrl: string;
}) {
  return (
    <section className="relative isolate min-h-[48vh] overflow-hidden bg-navy-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      <div className="hero-wash absolute inset-0" aria-hidden />
      <div className="wave-mask absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-5 pb-14 pt-32 lg:px-8">
        <h1 className="font-display animate-rise max-w-3xl text-4xl font-semibold md:text-5xl">
          {title}
        </h1>
        {body ? (
          <p className="animate-rise-delay mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {body}
          </p>
        ) : null}
      </div>
    </section>
  );
}
