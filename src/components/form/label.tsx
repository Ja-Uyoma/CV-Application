import React from "react";

export function Label(props: {
  labelText: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block w-full ${props.className}`}>
      <span className="font-medium">{props.labelText}</span>
      {props.children}
    </label>
  );
}
