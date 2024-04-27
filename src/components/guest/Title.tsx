import { DetailedHTMLProps, HTMLAttributes } from "react";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  main: string;
  second?: string;
  trueColor?: String;
};
export default function Title({
  main,
  second,
  trueColor,
  ...props
}: TitleProps) {
  return (
    <div {...props}>
      <span className={`text-3xl ${trueColor ?? "text-black dark:text-white"}`}>
        {main}
      </span>{" "}
      {second ? (
        <span className={`text-3xl ${trueColor ?? "text-primary"}`}>
          {second}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
