import Title from "@/components/guest/Title";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
type textareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type inputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  label: string;
  textarea?: boolean;
} & (inputProps | textareaProps);

const Input = ({ label, textarea = false, ...props }: InputProps) => {
  if (textarea) {
    return (
      <textarea
        {...(props as textareaProps)}
        placeholder={label}
        rows={5}
        className={`p-1 pl-0 w-[100%] md:min-w-[400px] outline-none border-0 border-b-[1px] border-black ${props.className}`}
      ></textarea>
    );
  }

  return (
    <input
      {...(props as inputProps)}
      placeholder={label}
      className={`p-1 pl-0  w-[100%] md:min-w-[400px] outline-none border-0 border-b-[1px] border-black ${props.className}`}
    />
  );
};

export default function SectionContact() {
  return (
    <section id="section-contact">
      <div className="container">
        <Title main="Contact" second="Us" className="mb-5 md:mb-12" />
        <div className="flex flex-col gap-5 justify-center w-fit mx-auto">
          <Input label="Name" />
          <Input label="Phone Number" />
          <Input label="Email" />
          <Input label="Message" textarea />

          <button className="bg-primary py-3 px-5 rounded-full text-white block w-[100%]">
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
}
