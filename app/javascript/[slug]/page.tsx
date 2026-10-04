import { notFound } from "next/navigation";
import { javascriptQuestions } from "@/app/data/javascriptQuestions";
import type { Metadata } from "next";
import MarkComplete from "@/app/components/MarkComplete";
import BookmarkButton from "@/app/components/BookmarkButton";
import Link from "next/link";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;


  const question = javascriptQuestions.find(
    (question) => question.slug === slug
  );

  

  if (!question) {
    return {
      title: "Question Not Found",
    };
  }

  return {
    title: `${question.title} | JS Interview Kit`,
    description: question.answer,
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;

  const question = javascriptQuestions.find(
    (question) => question.slug === slug
  );


 
  const currentIndex = javascriptQuestions.findIndex(
    (question) => question.slug === slug
  );
  


  const previousQuestion =
  currentIndex > 0
    ? javascriptQuestions[currentIndex - 1]
    : null;

const nextQuestion =
  currentIndex < javascriptQuestions.length - 1
    ? javascriptQuestions[currentIndex + 1]
    : null;

  if (!question) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/javascript"
        className="mb-8 inline-block text-sm text-gray-500 hover:text-black hover:underline"
      >
        ← Back to JavaScript Questions
      </Link>
      <div className="mb-8">
        <p className="mb-2 text-sm text-gray-500">
          {question.category} · {question.difficulty}
        </p>

        <h1 className="text-4xl mb-4 font-bold">
          {question.title}
        </h1>
        <div className="flex gap-4">
          <MarkComplete questionSlug={question.slug} />
          <BookmarkButton questionSlug={question.slug} />
        </div>

      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Answer
        </h2>

        <p className="leading-7 text-gray-700">
          {question.answer}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Explanation
        </h2>

        <p className="leading-7 text-gray-700">
          {question.explanation}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Example
        </h2>

        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-6">
          <code>{question.example}</code>
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Important Point
        </h2>

        <p className="leading-7 text-gray-700">
          {question.importantPoint}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          {question.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Follow-up Questions
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          {question.followUps.map((followUp) => (
            <li key={followUp}>{followUp}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex items-center justify-between border-t pt-8">
  {previousQuestion ? (
    <Link
      href={`/javascript/${previousQuestion.slug}`}
      className="text-sm font-medium hover:underline"
    >
      ← Previous Question
    </Link>
  ) : (
    <div />
  )}

  {nextQuestion ? (
    <Link
      href={`/javascript/${nextQuestion.slug}`}
      className="text-sm font-medium hover:underline"
    >
      Next Question →
    </Link>
  ) : (
    <div />
  )}
</div>
    </main>
  );
}