"use client";
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DefaultInputType } from "./DefaultInputType";
import qs from "qs";
import InputLabel from "./components/Label";
import InputError from "./components/Error";
import InputIcon from "./components/Icon";

type DropdownItemsType = {
  key: any;
  label: string;
};

type SourceResult = {
  items: DropdownItemsType[];
  selected: DropdownItemsType;
};

export type DropdownInputType = {
  /**
   * Static items, when not using remote source
   */
  items?: DropdownItemsType[];
  /**
   * Source url, for request items
   */
  source?: string;
  /**
   * Number of delay in ms, when request from source
   */
  remoteDelay?: number;
  /**
   * Dropdown placeholder
   */
  placeholder?: string;
} & DefaultInputType &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function DropdownInput({
  label,
  icon,
  span = "col-span-12",
  error,
  items: defaultItems,
  source = "",
  remoteDelay = 1500,
  placeholder = "-- Pilih --",
  onChange,
  ...props
}: DropdownInputType) {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [value, setValue] = useState<DropdownItemsType | null>(null);
  const [items, setItems] = useState(defaultItems ?? []);
  const [filteredItems, setFilteredItems] = useState<DropdownItemsType[]>([]);
  let intervalRemoteSearch = React.useRef<NodeJS.Timeout | null>(null);

  const valueElement = useMemo(
    () => {
      if (typeof window !== "undefined")
        return document.querySelector(
          `input[name=${props.name.replaceAll(".", "\\.")}]`,
        )
      return null
    },
    [props.name],
  );
  const HandleChangeVisibility = useCallback(
    () => setVisibility(!visibility),
    [setVisibility, visibility],
  );
  const HandleClearSelected = useCallback(() => {
    setValue(null);
    valueElement?.setAttribute("value", "");
    setVisibility(false);
  }, [valueElement, setValue, setVisibility]);
  const HandleSetValue = useCallback(
    (newValue: any) => {
      valueElement?.setAttribute("value", newValue.key as any);
      setValue(newValue);
      setVisibility(false);
      if (onChange) onChange(newValue.key as any);
    },
    [onChange, valueElement, setValue, setVisibility],
  );
  const FetchSourceItems = useCallback(
    async (search: string = ""): Promise<SourceResult | null> => {
      try {
        let parameter = { selected: props.value ?? "", search };
        let response = await fetch(source + "?" + qs.stringify(parameter));
        let json = await response.json();
        const result: SourceResult = json.data;
        return result;
      } catch (error) {
        console.error("Dropdown Component Error: " + error);
        return null;
      }
    },
    [props.value, source],
  );
  const HandleInputSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let keyword = e.target.value;
      if (source) {
        // Filter remote items
        if (intervalRemoteSearch.current)
          clearTimeout(intervalRemoteSearch.current);
        intervalRemoteSearch.current = setTimeout(async () => {
          setFilteredItems(
            (await FetchSourceItems(keyword).then(
              (result) => result?.items ?? [],
            )) ?? [],
          );
        }, remoteDelay);
      } else {
        // Filter local items
        if (defaultItems)
          setFilteredItems(
            defaultItems.filter((item) => {
              if (!keyword) return 1;
              return (
                item.label.toLowerCase().indexOf(keyword.toLowerCase()) > 0
              );
            }),
          );
      }
    },
    [
      items,
      defaultItems,
      FetchSourceItems,
      source,
      setFilteredItems,
      remoteDelay,
      intervalRemoteSearch,
    ],
  );

  const InitialLoad = useCallback(
    async () => {
      const remoteItem = await FetchSourceItems();
      setItems(remoteItem?.items ?? []);
      setFilteredItems(remoteItem?.items ?? []);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(
    () => {
      if (source) {
        InitialLoad();
      } else {
        if (defaultItems) setFilteredItems(defaultItems);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={`${span}`}>
      <div className={`flex flex-col justify-end h-full`}>
        <InputLabel name={props.name} label={label} />
        <div className="relative flex justify-center items-center">
          <InputIcon icon={icon} hasError={error} />
          <input type="hidden" name={props.name} />
          <div
            onClick={HandleChangeVisibility}
            className={`text-white p-2 rounded-lg text-sm border-[1px] border-gray-300 flex justify-between items-center flex-1 outline-none bg-transparent w-full ${props.className ?? ""} ${error ? "border-red-400" : ""}`}
          >
            {value?.label ?? placeholder}
            <div className="flex justify-center items-center">
              <ClearButton
                value={value || props.value}
                onClick={HandleClearSelected}
              />
              <span className="material-icons text-white">arrow_drop_down</span>
            </div>
          </div>
          <div
            className={`
            ${visibility ? "block" : "hidden"} absolute z-50 left-0 top-[100%] bg-black dark:bg-gray-600 border-[1px] p-2 w-full rounded-md`}
          >
            <input
              onChange={HandleInputSearch}
              type="text"
              className="border-[1px] w-full p-2 bg-transparent dark:bg-black rounded-lg"
              placeholder="Cari...."
            />
            <div className="pt-2 max-h-[200px] overflow-y-auto">
              <DisplayItem items={filteredItems} onClick={HandleSetValue} />
            </div>
          </div>
        </div>
        <InputError error={error} />
      </div>
    </div>
  );
}

const DisplayItem = ({
  items,
  onClick,
}: {
  items: DropdownItemsType[];
  onClick: any;
}) => {
  if (items.length <= 0)
    return (
      <span className="text-white text-sm text-center block">
        Item tidak tersedia
      </span>
    );

  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${item.key}-${index}`}
          className="py-1 border-b-[1px] last:border-b-0"
          onClick={() => onClick(item)}
        >
          <span className="text-sm text-white">{item.label}</span>
        </div>
      ))}
    </>
  );
};

const ClearButton = ({ value, onClick }: any) => {
  if (!value) return <></>;
  return (
    <span onClick={onClick} className="text-sm text-white cursor-pointer">
      <i className="material-icons" style={{ fontSize: "14px" }}>
        clear
      </i>
    </span>
  );
};
