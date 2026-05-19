export default function SkincareLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/75 backdrop-blur-xl">
        <div className="content-frame flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-2xl bg-gradient-to-r from-rose-400 to-sky-400 shadow-md" />

            <div className="min-w-0">
              <h1 className="break-words text-lg font-semibold leading-tight">
                Skincare Mode
              </h1>
              <p className="break-words text-xs text-gray-500">
                AI-guided skin and beauty discovery
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-600">
              Glow Signals
            </span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600">
              Routine Match
            </span>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-rose-300/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <main className="content-frame w-full min-w-0 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words">{children}</div>
      </main>
    </div>
  );
}
