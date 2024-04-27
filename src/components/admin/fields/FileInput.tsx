import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from "react";
import { DefaultInputType } from "./DefaultInputType";
import InputLabel from "./components/label";
import InputError from "./components/Error";
import InputIcon from "./components/Icon";

type FilePreviewType = {
  withPreview: boolean;
  files: FileStateType[] | null;
  preview: string[] | null | string;
};

export type FileInputType = {
  withPreview?: boolean;
  preview: string[] | null | string;
} & DefaultInputType &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type FileStateType = {
  file: File;
  url: string;
};

export default function FileInput({
  withPreview = false,
  preview = null,
  label,
  icon,
  span = "col-span-12",
  error,
  onChange,
  ...props
}: FileInputType) {
  const [files, setFiles] = useState<FileStateType[] | null>(null);

  const HandleChangeFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return;
      const fileTemp: FileStateType[] = [];
      let fileLength = event.target.files.length;
      for (let fileIndex = 0; fileIndex < fileLength; fileIndex++) {
        fileTemp.push({
          file: event.target.files[fileIndex],
          url: URL.createObjectURL(event.target.files[fileIndex]),
        });
      }

      files?.map((file) => URL.revokeObjectURL(file.url));
      setFiles(() => fileTemp);
      if (onChange) onChange(event);
    },
    [files, setFiles, onChange],
  );

  const HandleRemoveFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      files?.map((file) => URL.revokeObjectURL(file.url));
      setFiles(null);
      let inputElement: HTMLInputElement | null = document.querySelector(
        `input[name=${props.name.replaceAll(".", "\\.")}]`,
      );
      if (!inputElement) return;
      inputElement.value = "";
      if (onChange) onChange(event);
    },
    [props.name, files, setFiles, onChange],
  );

  return (
    <div className={span}>
      <div className={`flex flex-col justify-end h-full`}>
        <InputLabel name={props.name} label={label} />
        <FilePreview
          withPreview={withPreview}
          preview={preview}
          files={files}
        />
        <div className="flex justify-center items-center">
          <InputIcon icon={icon} hasError={error} />
          <input
            {...props}
            onChange={HandleChangeFile}
            type="file"
            className={`file:mr-5 file:px-3 file:text-xs file:font-medium file:border-none file:rounded-md file:py-2 file:bg-[var(--color-primary)] file:text-white p-2 rounded-sm border-[1px] border-gray-300 flex-1 outline-none bg-white dark:bg-gray-600 w-full ${props.className ?? ""} ${error ? "border-red-400" : ""}`}
          />
          <RemoveButton onClick={HandleRemoveFile} files={files} />
        </div>
        <InputError error={error} />
      </div>
    </div>
  );
}

const RemoveButton = ({ files, onClick }: any) => {
  if (!files) return <></>;
  return (
    <span onClick={onClick} className={`material-icons mr-3 p-2 text-red-400`}>
      close
    </span>
  );
};

const FilePreview = ({ withPreview, files, preview }: FilePreviewType) => {
  if (!withPreview) return <></>;

  let displayView: React.ReactNode;

  if (files) {
    displayView = (
      <>
        {files.map(({ file, url }, index) => (
          <DynamicFilePreview file={file} url={url} key={index} />
        ))}
      </>
    );
  } else if (
    typeof preview !== "string" &&
    preview?.length &&
    preview.length > 0
  ) {
    displayView = (
      <>
        {preview?.map((url, index) => <ImagePreview key={index} url={url} />)}
      </>
    );
  } else if (typeof preview === "string") {
    displayView = <ImagePreview key={preview} url={preview} />;
  } else {
    displayView = (
      <span className="text-sm text-gray-500 dark:text-white">
        Preview will display here
      </span>
    );
  }

  return (
    <div className="w-full min-h-[200px] border-[1px] p-5 mb-2 rounded-lg flex justify-center items-center flex-wrap">
      {displayView}
    </div>
  );
};

const ImagePreview = ({
  url,
  alt = "preview file",
}: {
  url: string;
  alt?: string;
}) => {
  return (
    <img src={url} className="w-auto max-h-[200px] rounded-sm m-2" alt={alt} />
  );
};

const DynamicFilePreview = ({
  file,
  url,
}: {
  file: File;
  url: string;
}): React.ReactNode => {
  return (
    <>
      {file.type.match("image/") ? (
        <ImagePreview alt={`preview image ${file.name}`} url={url} />
      ) : file.type.match("application/pdf") ? (
        <iframe className="m-2 min-h-[400px] min-w-[250px]" src={url}></iframe>
      ) : (
        <div className="h-[200px] w-[150px] flex flex-col items-center justify-center rounded-sm m-2 border-[1px] relative">
          <div className=" w-[0px] h-[0px] border-[10px] border-transparent border-r-[var(--color-primary)] border-t-[var(--color-primary)] absolute top-0 right-0"></div>
          <span className="text-xs block m-2 text-wrap">{file.name}</span>
        </div>
      )}
    </>
  );
};
