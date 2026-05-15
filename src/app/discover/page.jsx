export default function DiscoverPage() {
  const cards = [
    "Trending AI tools and search patterns",
    "Popular product research flows",
    "Fresh content clusters for discovery",
  ];

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-6 py-8">
      <section className="w-full min-w-0 rounded-[32px] border border-white/60 bg-white/80 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
        <p className="break-words text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
          Discover
        </p>
        <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-gray-900">
          Explore Intelligent Feeds
        </h1>
        <p className="mt-2 break-words text-sm text-gray-500">
          Discovery modules stay centered and constrained inside the shared app
          shell.
        </p>
      </section>

      <div className="grid w-full min-w-0 grid-cols-1 gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card}
            className="w-full min-w-0 rounded-[28px] border border-white/60 bg-white/80 p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
          >
            <p className="break-words text-base font-semibold text-gray-900">
              {card}
            </p>
            <p className="mt-2 break-words text-sm text-gray-500">
              Responsive cards with stable width and no layout drift.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
