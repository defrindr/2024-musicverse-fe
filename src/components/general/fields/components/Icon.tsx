export default function InputIcon({
  icon,
  hasError,
}: {
  icon?: React.ReactNode;
  hasError?: string | undefined;
}) {
  if (!icon) return <></>;
  return (
    <span className={`mr-3 ${hasError ? "text-red-400" : ""}`}>{icon}</span>
  );
}
