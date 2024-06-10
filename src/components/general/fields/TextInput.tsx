import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { DefaultInputType } from "./DefaultInputType";
import InputLabel from "./components/Label";
import InputError from "./components/Error";
import InputIcon from "./components/Icon";

export type TextInputType = DefaultInputType &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function TextInput({
  label,
  icon,
  span = "col-span-12",
  error,
  ...props
}: TextInputType) {
  return (
    <div className={span}>
      <div className={`flex flex-col justify-end h-full`}>
        <InputLabel name={props.name} label={label} />
        <div className="flex justify-center items-center">
          <InputIcon icon={icon} hasError={error} />
          <input
            {...props}
            className={`rounded-lg border-[1px] text-white border-gray-300 flex-1 outline-none bg-transparent  w-full ${props.className ?? ""} ${error ? "border-red-400" : ""} ${props.type === "color" ? "p-0" : "p-2"}`}
          />
        </div>
        <InputError error={error} />
      </div>
    </div>
  );
}
