import { javascriptQuestions } from "@/app/data/javascriptQuestions";
import QuestionList from "@/app/components/QuestionList";

export default function JavaScriptPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-gray-500">
          Interview Preparation
        </p>

        <h1 className="text-4xl font-bold">
          JavaScript Interview Questions
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Prepare for JavaScript interviews with curated questions,
          explanations, examples, and follow-up questions.
        </p>
      </div>

      <QuestionList questions={javascriptQuestions} />
    </main>
  );
}