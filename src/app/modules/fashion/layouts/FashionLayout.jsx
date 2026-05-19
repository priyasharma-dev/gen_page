export default function FashionLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/70 backdrop-blur-xl">
        <div className="content-frame flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-md" />

            <div className="min-w-0">
              <h1 className="break-words text-lg font-semibold leading-tight">
                Fashion Mode
              </h1>
              <p className="break-words text-xs text-gray-500">
                AI-powered style discovery
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
              Style Engine
            </span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-600">
              Trending AI
            </span>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <main className="content-frame w-full min-w-0 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words">{children}</div>
      </main>
    </div>
  );
}
