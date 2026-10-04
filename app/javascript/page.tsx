const questions = [
    {
      id: 1,
      title: "What is hoisting in JavaScript?",
      topic: "JavaScript Basics",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "What is a closure in JavaScript?",
      topic: "Functions",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "What is the difference between var, let and const?",
      topic: "JavaScript Basics",
      difficulty: "Easy",
    },
    {
      id: 4,
      title: "Explain the JavaScript event loop.",
      topic: "Async JavaScript",
      difficulty: "Medium",
    },
    {
      id: 5,
      title: "What is the difference between == and ===?",
      topic: "JavaScript Basics",
      difficulty: "Easy",
    },
    {
      id: 6,
      title: "What are promises in JavaScript?",
      topic: "Async JavaScript",
      difficulty: "Medium",
    },
  ];
  
  export default function JavaScriptPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Interview Kit
          </p>
  
          <h1 className="mt-3 text-4xl font-bold">
            JavaScript Interview Questions
          </h1>
  
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Practice JavaScript questions covering fundamentals, functions,
            asynchronous programming, and common interview concepts.
          </p>
        </div>
  
        <div className="mt-12 grid gap-5">
          {questions.map((question) => (
            <div
              key={question.id}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-400"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  {question.topic}
                </span>
  
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                  {question.difficulty}
                </span>
              </div>
  
              <h2 className="mt-4 text-xl font-semibold">
                {question.title}
              </h2>
  
              <button className="mt-5 text-sm font-medium underline">
                View question →
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }