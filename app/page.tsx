export default function Home() {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Interview Preparation
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Prepare for JavaScript interviews
              <span className="block text-gray-500">
                without the confusion.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Practice carefully selected JavaScript interview questions,
              understand the concepts, and prepare for real interviews.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/javascript"
                className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
              >
                Start JavaScript Prep
              </a>

              <a
                href="/javascript"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium hover:bg-gray-50"
              >
                Explore Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Everything you need for JavaScript interviews
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Concepts"
            description="Understand important JavaScript concepts from the basics to advanced topics."
          />

          <FeatureCard
            title="Interview Questions"
            description="Practice questions commonly asked in frontend and full-stack interviews."
          />

          <FeatureCard
            title="Follow-up Questions"
            description="Prepare for the questions interviewers ask after your first answer."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </div>
  );
}