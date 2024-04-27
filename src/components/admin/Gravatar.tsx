"use client";
import React from "react";

export default function Gravatar({
  title,
}: Readonly<{
  title: string;
}>) {
  return <div className="gravatar">{title[0]}</div>;
}
