export default function NewsLayout({
  children,
  breakingNews = [],
  highlights = [],
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/70 backdrop-blur-xl">
        <div className="content-frame flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md" />

            <div className="min-w-0">
              <h1 className="break-words text-lg font-semibold leading-tight">
                News Mode
              </h1>
              <p className="break-words text-xs text-gray-500">
                AI-powered real-time intelligence feed
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
              Live Updates
            </span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
              Timeline AI
            </span>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-3xl" />
      </div>

      <main className="content-frame w-full min-w-0 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 w-full min-w-0 rounded-xl border border-blue-100 bg-white/60 p-4 text-center backdrop-blur">
          {breakingNews.length > 0 ? (
            breakingNews.map((item, i) => (
              <p
                key={i}
                className="break-words text-sm font-medium text-blue-700"
              >
                🔴 {item.title}
              </p>
            ))
          ) : (
            <p className="break-words text-sm text-gray-500">
              No breaking updates available
            </p>
          )}
        </div>

        {highlights.length > 0 && (
          <div className="mb-6 grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="min-w-0 rounded-xl border border-blue-100 bg-white/70 p-4 backdrop-blur transition hover:shadow-md"
              >
                <h3 className="break-words text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 break-words text-xs text-gray-500">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="w-full min-w-0 break-words">{children}</div>
      </main>
    </div>
  );
}
