"use client";
import Title from "@/components/guest/Title";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

const ItemQuestion = ({
  active,
  question,
  answers,
  fnClick,
}: {
  active: boolean;
  question: string;
  answers: string;
  fnClick: () => void;
}) => {
  return (
    <div className="p-2">
      <div className="py-3 flex flex-row justify-between items-center">
        <span className="font-bold text-lg">{question}</span>

        <div
          className={`rounded-full py-[2px] px-[2px] flex items-center justify-center ${active ? "bg-cyan-600" : "bg-white"}`}
          onClick={fnClick}
        >
          <span
            className={`material-icons ${active ? "text-white" : "text-black"}`}
            style={{ fontSize: "18px" }}
          >
            {active ? "horizontal_rule" : "add"}
          </span>
        </div>
      </div>
      <div className="relative me-10">
        <p
          className={
            active
              ? "opacity-100 relative h-fit transition-all"
              : "opacity-100 h-0 absolute top-0 transition-all"
          }
        >
          <span
            className={
              active
                ? "text-white transition-all"
                : "text-transparent transition-all"
            }
          >
            {answers}
          </span>
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [state, setState] = useState<number | null>(null);

  const questions = [
    {
      question: "Question 1 ?",
      answers: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.`,
    },
    {
      question: "Question 2 ?",
      answers: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.`,
    },
    {
      question: "Question 3 ?",
      answers: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.`,
    },
  ];

  const changeState = useCallback(
    (index: number) => {
      if (index === state) setState(() => null);
      else setState(() => index);
    },
    [state, setState],
  );

  return (
    <div className="my-6 mx-3 bg-slate-800 p-4 rounded-md">
      {questions.map((item, index) => (
        <ItemQuestion
          key={index}
          active={state === index}
          question={item.question}
          answers={item.answers}
          fnClick={() => changeState(index)}
        />
      ))}
    </div>
  );
};

export default function SectionFaq() {
  return (
    <section id="section-faq">
      <div className="container">
        <Title
          main="FAQ: Answers to Your "
          second="Queries"
          className="mb-5 md:mb-12"
        />
        <Accordion />
      </div>
    </section>
  );
}
