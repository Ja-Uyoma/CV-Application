import React from "react";

export function Label(props: { labelText: string; children: React.ReactNode }) {
  return (
    <label className="block w-full">
      <span className="font-medium">{props.labelText}</span>
      {props.children}
    </label>
  );
}
