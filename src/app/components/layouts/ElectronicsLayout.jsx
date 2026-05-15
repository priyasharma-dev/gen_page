export default function ElectronicsLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#101828]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[920px] min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-sm font-bold text-[#3267EB] shadow-sm">
              A
            </div>

            <div className="min-w-0">
              <h1 className="break-words text-[15px] font-semibold leading-tight">
                Mobile Phones Under 20,000
              </h1>
              <p className="break-words text-xs text-[#667085]">
                Electronics recommendations
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            <span className="rounded-full border border-[#D8E3FF] bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#3267EB]">
              5G Phones
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[920px] min-w-0 overflow-hidden bg-white px-4 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:px-6 lg:px-10">
        <div className="w-full min-w-0 break-words">
          {children}
        </div>
      </main>
    </div>
  );
}
