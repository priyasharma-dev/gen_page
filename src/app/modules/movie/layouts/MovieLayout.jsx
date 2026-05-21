export default function MovieLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-['Inter',Arial,sans-serif] text-[#111827]">
      <main className="content-frame relative w-full min-w-0 px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full min-w-0 break-words lg:pt-[24px]">{children}</div>
      </main>
    </div>
  );
}
