export default function ElectronicsLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="content-frame flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg" />

            <div className="min-w-0">
              <h1 className="break-words text-lg font-semibold leading-tight">
                Electronics Mode
              </h1>
              <p className="break-words text-xs text-gray-400">
                Powered by UI Engine
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              Smart Category
            </span>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              AI Adaptive
            </span>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 blur-3xl">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500" />
      </div>

      <main className="content-frame w-full min-w-0 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words">{children}</div>
      </main>
    </div>
  );
}
