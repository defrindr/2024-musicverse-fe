import Option from "./Option";

export default function UserTypePage() {
  return (
    <>
      <div className="grid grid-cols-5 gap-0">
        <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
          <span className="
          font-[poppins]
          text-[48px]
          font-semibold
          leading-[52.32px]
          tracking-[0.01em]
          text-left
          block
          mb-4">“Are you an Artist or a Producer?”</span>
          <span className="block mb-8">Select one profile type now and you can always create a second one later.</span>
        </div>
        <div className="col-span-5 md:col-span-2 flex flex-col gap-8">
          <Option
            title="talent"
            description="distribute your music"
            icon="/images/auth/icon-talent.png"
            active
          />
          <Option
            title="PRODUCER"
            description="looking for new music talents"
            icon="/images/auth/icon-producer.png"
          />
        </div>

        <div className="col-span-3"></div>

        <div className="col-span-5 md:col-span-2 mt-8">
          <button className="bg-primary p-2 px-4 rounded-full w-full">
            CREATE PROFILE
          </button>
        </div>
      </div>
    </>
  );
}