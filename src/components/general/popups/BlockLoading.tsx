export default function BlockLoading(
  { active }:
    { active: boolean }
) {

  if (!active) return;

  return (

    <div className="fixed z-20 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center h-[100vh] bg-[#222222AA] text-center p-0">
        <img src="/images/spinner.gif" alt="Loading Spinner" className="w-[150px] h-auto" />
      </div>
    </div>
  );
}