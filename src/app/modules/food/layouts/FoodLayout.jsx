export default function FoodLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/70 backdrop-blur-xl">
        <div className="content-frame flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-md" />

            <div className="min-w-0">
              <h1 className="break-words text-lg font-semibold leading-tight">
                Food Mode
              </h1>
              <p className="break-words text-xs text-gray-500">
                AI-powered dining discovery
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
              Taste Engine
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-600">
              Local Picks
            </span>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-orange-300/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
      </div>

      <main className="content-frame w-full min-w-0 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words">{children}</div>
      </main>
    </div>
  );
}
