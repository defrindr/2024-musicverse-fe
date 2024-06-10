export default function InputLabel({
  name,
  label,
}: {
  name: string;
  label?: string;
}) {
  if (!label) return <></>;
  return (
    <label htmlFor={name} className="mb-2 font-light text-white text-base">
      {label}
    </label>
  );
}
