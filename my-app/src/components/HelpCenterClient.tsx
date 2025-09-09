"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  route?: string;
}

interface Props {
  faqs: FAQ[];
}

export default function HelpCenterClient({ faqs }: Props) {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const router = useRouter();

  const filtered = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-white mb-4">Help Center</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-600 dark:bg-[#101828] dark:text-white focus:outline-none mb-6"
      />

      {/* FAQ List */}
      <div className="flex flex-col gap-3">
        {filtered.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#1A2234] p-4 rounded-xl cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
            >
              <h2 className="font-semibold text-white">{faq.question}</h2>
              <span className="text-gray-400">{expanded === faq.id ? "▲" : "▼"}</span>
            </div>

            {expanded === faq.id && (
              <div className="mt-2 text-gray-300 flex flex-col gap-2">
                <p>{faq.answer}</p>

                {faq.route && (
                  <button
                    onClick={() => router.push(faq.route!)}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-max"
                  >
                    Go to Page
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-400 italic">No results found.</p>
        )}
      </div>
    </div>
  );
}
