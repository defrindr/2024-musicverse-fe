import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  color: "white" | "green";
};

export default function Button({ title, color, ...props }: ButtonProps) {
  let colorStyle = useMemo(() => {
    switch (color) {
      case "green":
        return "bg-gray-800 text-white border-gray-800 hover:text-white dark:hover:bg-gray-900";
      case "white":
        return "bg-white text-black dark:bg-black dark:text-white border-white hover:text-white";
      default:
        return "";
    }
  }, [color]);

  return (
    <button
      {...props}
      className={`text-md p-2 pl-3 pr-3 hover:bg-transparent border-[1px] ${colorStyle} ${props.className}`}
    >
      {title}
    </button>
  );
}
