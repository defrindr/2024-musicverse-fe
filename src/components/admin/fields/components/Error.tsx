export default function InputError({ error }: { error?: string }) {
  if (!error) return <span className="p-2" />;
  return <span className="text-red-400 text-xs">{error}</span>;
}
