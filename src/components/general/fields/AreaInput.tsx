import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { DefaultInputType } from "./DefaultInputType";
import InputError from "./components/Error";
import InputIcon from "./components/Icon";
import InputLabel from "./components/Label";

export type TextAreaInputType = DefaultInputType &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

export default function TextAreaInput({
  label,
  icon,
  span = "col-span-12",
  error,
  ...props
}: TextAreaInputType) {
  return (
    <div className={`${span}`}>
      <div className={`flex flex-col justify-end h-full`}>
        <InputLabel name={props.name} label={label} />
        <div className="flex justify-center items-center">
          <InputIcon icon={icon} hasError={error} />
          <textarea
            {...props}
            className={`p-2 rounded-sm border-[1px] border-gray-300 flex-1 outline-none text-white bg-transparent w-full ${props.className ?? ""} ${error ? "border-red-400" : ""}`}
          ></textarea>
        </div>
        <InputError error={error} />
      </div>
    </div>
  );
}
