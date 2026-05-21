export default function InsuranceLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-['Inter',Arial,sans-serif] text-[#111827]">
      <div className="sticky top-0 z-20 border-b border-[rgba(9,9,11,0.10)] bg-white/95 backdrop-blur-md">
        <div className="content-frame flex h-[73px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <p className="text-[18px] font-semibold text-[#101828]">
              Best cheap auto insurance in USA
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-[10px] bg-[#ECF1FF] px-3 py-1.5 text-[14px] font-medium text-[#4A81FF]"
          >
            Share
          </button>
        </div>
      </div>

      <main className="content-frame relative w-full min-w-0 px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words lg:pt-[24px]">{children}</div>
      </main>
    </div>
  );
}
