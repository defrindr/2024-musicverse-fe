"use client";

import Link from "next/link";
import React, { ChangeEvent, useCallback, useRef, useState } from "react";

type DatatableDataType = {
  items: any;
  meta?: {
    currentPage: number;
    total: number;
    perPage: number;
    // path: string,
    totalPage: number;
  };
};

type DatatableType = {
  responsive?: boolean;
  index?: boolean;
  searchable?: boolean;
  rowStyle?: string;
  tableStyle?: string;
  headStyle?: string;
  EmptyListText?: string;
  actionButtonHref?: string | null;
  actionColumn?: (item: any) => React.ReactNode;
  changeRequest: (param: any) => void;
  fields: {
    label: string;
    value: (item: any) => any;
    index?: boolean;
    width?: number;
    titleClassName?: string;
    className?: string;
  }[];
  data: DatatableDataType | null;
};

const PaginationComponent = ({ meta, search, changeRequest }: any) => {
  const HandleChangeToPreviousPage = useCallback(() => {
    const { currentPage } = meta;
    let previousPage = currentPage - 1;
    if (previousPage >= 1) {
      changeRequest({ search, page: previousPage });
    }
  }, [changeRequest, meta?.currentPage, meta?.totalPage]);

  const HandleChangeToNextPage = useCallback(() => {
    const { currentPage, totalPage } = meta;
    let nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      changeRequest({ search, page: nextPage });
    }
  }, [changeRequest, meta.currentPage, meta.totalPage]);

  return (
    <div className="col-span-2 md:col-span-1 flex justify-start items-center gap-3">
      <button
        onClick={HandleChangeToPreviousPage}
        className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center"
      >
        <span className="material-icons text-white">arrow_left</span>
      </button>
      <div>
        <span>{meta.currentPage}</span>
        <span>/</span>
        <span>{meta.totalPage}</span>
      </div>
      <button
        onClick={HandleChangeToNextPage}
        className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center"
      >
        <span className="material-icons text-white">arrow_right</span>
      </button>
    </div>
  );
};

const SearchComponent = ({ changeRequest, setSearch }: any) => {
  const SearchRef = useRef<NodeJS.Timeout | null>(null);

  const HandleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (SearchRef.current) clearTimeout(SearchRef.current);
      SearchRef.current = setTimeout(() => {
        changeRequest({ search: event.target.value, page: 1 });
        setSearch(event.target.value);
      }, 1500);
    },
    [setSearch, changeRequest],
  );

  return (
    <div className="col-span-2 md:col-span-1 flex justify-end">
      <input
        onChange={HandleChangeInput}
        type="text"
        className="border-[1px] border-gray-400 rounded-lg p-2 px-3 outline-none bg-transparent text-white"
        placeholder="Cari ..."
      />
    </div>
  );
};

export default function Datatable({
  fields,
  data,
  rowStyle = "",
  tableStyle = "",
  headStyle = "",
  actionButtonHref = null,
  responsive = true,
  changeRequest,
  actionColumn,
  EmptyListText = "Data tidak tersedia",
  index = true,
  searchable = false,
}: DatatableType) {
  if (!data) return <></>;

  const [search, setSearch] = useState("");

  return (
    <div className="bg-transparent p-4 rounded-md shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        {actionButtonHref && (
          <div className="col-span-4 mt-3">
            <Link
              className="bg-green-500 p-2 px-4 rounded-md text-white"
              href={actionButtonHref}
            >
              Tambah Data
            </Link>
          </div>
        )}
        {data.meta ? (
          <PaginationComponent
            meta={data.meta}
            search={search}
            changeRequest={changeRequest}
          />
        ) : (
          <div className="col-span-2 md:col-span-1" />
        )}
        {searchable ? (
          <SearchComponent
            changeRequest={changeRequest}
            setSearch={setSearch}
          />
        ) : (
          <div className="col-span-2 md:col-span-1" />
        )}
      </div>
      <div className="relative rounded-xl overflow-auto">
        <div
          className={`shadow-sm ${responsive ? "overflow-auto" : "overflow-hidden"} my-8`}
        >
          <table
            className={
              `${responsive ? "table-auto" : "table-fixed"} border-collapse w-full text-sm ` +
              tableStyle
            }
          >
            <thead>
              <tr className={headStyle}>
                {index && (
                  <th
                    key={"index"}
                    className="text-sm p-1 lg:p-4 lg:pl-8 pt-0 pb-3 text-white text-left"
                  >
                    #
                  </th>
                )}
                {fields.map((field, index) => {
                  return (
                    <th
                      key={index}
                      className={
                        "text-sm p-1 lg:p-4 lg:pl-8 pt-0 pb-3 text-white text-left uppercase " +
                        (field.titleClassName ?? "")
                      }
                      style={field.width ? { width: `${field.width}%` } : {}}
                    >
                      {field.label}
                    </th>
                  );
                })}
                {actionColumn && (
                  <th
                    key={"actionColumn"}
                    className="text-sm p-1 lg:p-4 lg:pl-8 pt-0 pb-3 text-white text-left"
                  >
                    Aksi
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-transparent gap-5">
              {
                data.items.length === 0 &&
                <tr>
                  <td colSpan={fields.length + (index ? 1 : 0) + (actionColumn ? 1 : 0)} className="text-white text-center">
                    {EmptyListText}
                  </td>
                </tr>
              }
              {data.items.map((row: any, indexRow: number) => {
                return (
                  <tr key={indexRow} className={rowStyle}>
                    {index && (
                      <td key={"index"} className="p-1 lg:p-4 lg:pl-8 text-white">
                        {indexRow +
                          1 +
                          (data.meta?.perPage ?? 0) *
                          ((data.meta?.currentPage ?? 1) - 1)}
                      </td>
                    )}
                    {fields.map((field, indexField) => {
                      return (
                        <td
                          key={indexField}
                          className={
                            "p-1 lg:p-4 lg:pl-8 text-white " + (field.className ?? "")
                          }
                        >
                          {field.value(row)}
                        </td>
                      );
                    })}
                    {actionColumn && (
                      <td key={"actionColumn"} className="p-1 lg:p-4 lg:pl-8 text-white">
                        {actionColumn(row)}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
