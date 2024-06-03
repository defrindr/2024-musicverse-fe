"use client";
import { useRouter } from "next/navigation";

export default function FormComponent() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-10">
      <FileUpload
        image="/images/admin/mp3.svg"
        title={"Upload Your Music"}
        description={"Add your music here in MP3 format or link"}
        type={"music"}
        supported={"MP3"}
      />
      <FileUpload
        image="/images/admin/mp4.svg"
        title={"Upload Your Showreal"}
        description={"Add your showreal here in MP4 format or link"}
        type={"showreal"}
        supported={"MP4"}
      />
      <div className="col-span-2 flex justify-end">
        <button
          className="bg-primary text-white p-2 px-4 rounded-md"
          onClick={() => router.push("/talent/add-portfolio/confirm")}
        >
          Update File
        </button>
      </div>
    </div>
  );
}

type FileUploadType = {
  image: string;
  title: string;
  description: string;
  type: string;
  supported: string;
};
const FileUpload = ({
  image,
  title,
  description,
  type,
  supported,
}: FileUploadType) => {
  return (
    <>
      <div className="col-span-2 lg:col-span-1">
        <span className="block text-base font-semibold text-white mb-1">
          {title}
        </span>
        <span className="block text-base text-white font-light mb-5">
          {description}
        </span>
        <div className="border-[1px] border-secondary p-4 lg:p-10 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <img src={image} alt={type} className="w-[35px] h-auto m-4" />
            <span className="block text-white font-semibold text-lg mt-5 p-0">
              Drag and drop {type}
            </span>
            <span className="block text-white font-light text-[10px] leading-normal">
              File Supported: {supported}
            </span>
            <span className="block text-white font-semibold text-sm my-5">
              or
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1">
                <button className="uppercase min-w-[120px] text-sm lg:text-base bg-primary p-2 md:px-2 lg:px-10 text-white rounded-full">
                  browse file
                </button>
              </div>
              <div className="col-span-2 md:col-span-1">
                <button className="uppercase min-w-[120px] text-sm lg:text-base border-primary bg-black border-[1px] p-2 md:px-2 lg:px-10 text-white rounded-full">
                  add link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
