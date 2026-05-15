export default async function ChatDetailPage({ params }) {
  const resolvedParams = await params;

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-6 py-8">
      <section className="w-full min-w-0 rounded-[32px] border border-white/60 bg-white/80 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
        <p className="break-words text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
          Chat Session
        </p>
        <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-gray-900">
          Conversation: {resolvedParams.id}
        </h1>
        <p className="mt-2 break-words text-sm text-gray-500">
          Dynamic chat routes stay aligned inside the shared app shell.
        </p>
      </section>

      <div className="grid w-full min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="w-full min-w-0 rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
          <h2 className="break-words text-lg font-semibold text-gray-900">
            Context
          </h2>
          <p className="mt-2 break-words text-sm text-gray-500">
            This route can host message history, schema outputs, or workflow
            context without breaking the layout contract.
          </p>
        </article>

        <article className="w-full min-w-0 rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
          <h2 className="break-words text-lg font-semibold text-gray-900">
            Insights
          </h2>
          <p className="mt-2 break-words text-sm text-gray-500">
            Long chat identifiers and content are wrapped safely with
            `break-words`.
          </p>
        </article>
      </div>
    </div>
  );
}
