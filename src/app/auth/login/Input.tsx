import { InputHTMLAttributes } from "react";

type InputProps = {
  icon?: string;
  password?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  icon,
  password = false,
  ...props
}: InputProps) {
  return (
    <div className="form-group">
      {
        icon &&
        <span className="material-icons">{icon}</span>
      }
      <input {...props} type={password ? "password" : props.type ?? "text"} />
    </div>
  );
}
