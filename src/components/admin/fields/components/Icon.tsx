export default function InputIcon({
  icon,
  hasError,
}: {
  icon?: string;
  hasError?: string | undefined;
}) {
  if (!icon) return <></>;
  return (
    <span className={`material-icons mr-3 ${hasError ? "text-red-400" : ""}`}>
      {icon}
    </span>
  );
}
