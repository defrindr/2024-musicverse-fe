export default function BlockLoading({
  active,
  opacity = 0.6,
}: {
  active: boolean;
  opacity?: number;
}) {
  if (!active) return;

  return (
    <div className="fixed z-[60] overflow-y-auto top-0 w-full left-0">
      <div
        className="flex items-center justify-center h-[100vh] text-center p-0"
        style={{ background: `rgba(22,22,22,${opacity})` }}
      >
        <img
          src="/images/spinner.gif"
          alt="Loading Spinner"
          className="w-[150px] h-auto"
        />
      </div>
    </div>
  );
}
