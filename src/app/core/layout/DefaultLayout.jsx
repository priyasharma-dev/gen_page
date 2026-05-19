export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />

      <div className="content-frame w-full min-w-0 overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 text-center text-sm text-gray-400">
          Search UI Engine
        </div>

        <div className="w-full min-w-0 break-words">{children}</div>
      </div>
    </div>
  );
}
