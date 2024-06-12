"use client";
import Title from "@/components/guest/Title";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { GuestContext } from "./page";

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
  const { items } = useContext(GuestContext);

  const questions = useMemo(() => items["faqs"], [items]);

  const changeState = useCallback(
    (index: number) => {
      if (index === state) setState(() => null);
      else setState(() => index);
    },
    [state, setState],
  );

  return (
    <div className="my-6 mx-3 bg-slate-800 p-4 rounded-md">
      {questions.map(
        (item: { question: string; answer: string }, index: number) => (
          <ItemQuestion
            key={index}
            active={state === index}
            question={item.question}
            answers={item.answer}
            fnClick={() => changeState(index)}
          />
        ),
      )}
    </div>
  );
};

export default function SectionFaq() {
  const { items } = useContext(GuestContext);

  const secondTitle = useMemo(() => {
    if (items["app.text.faq-title"]) {
      let splitted = items["app.text.faq-title"].split("\n");
      return splitted[splitted.length - 1] !== items["app.text.faq-title"]
        ? splitted[splitted.length - 1]
        : "";
    }
    return "";
  }, [items["app.text.faq-title"]]);

  const firstTitle = useMemo(() => {
    if (items["app.text.faq-title"])
      return items["app.text.faq-title"].replace(secondTitle, "");
    return "";
  }, [items["app.text.faq-title"], secondTitle]);

  return (
    <section id="section-faq">
      <div className="container">
        <Title
          main={firstTitle}
          second={secondTitle}
          className="mb-5 md:mb-12"
        />
        <Accordion />
      </div>
    </section>
  );
}
