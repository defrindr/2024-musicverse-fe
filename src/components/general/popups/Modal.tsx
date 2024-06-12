import React from "react";

type IModal = {
  active: boolean;
  footer?: React.ReactNode;
  noFooter?: boolean;
  body?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Modal({
  active,
  footer,
  noFooter = false,
  body,
  ...props
}: IModal) {
  if (!active) return <></>;

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          {...props}
          className={
            "inline-block align-center bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-auto " +
            props.className
          }
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white">
            {body}
          </div>
          {!noFooter && (
            <div className="bg-[#333] px-4 py-3 text-right">{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
}
