import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header?: null | React.ReactNode;
};

export default function Card({
  children,
  header,
  className,
  ...props
}: CardProps) {
  return (
    <div {...props} className={`card ${className}`}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
}
