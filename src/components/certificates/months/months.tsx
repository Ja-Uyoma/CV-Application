import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { State } from "./types";
import { useStore } from "./hooks";

export function Months(props: { isDisabled: boolean }) {
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { register } = useForm<State>();
  const updateMonth = useStore((state) => state.updateMonth);

  return (
    <>
      <label className="block w-full">
        <select
          {...register("month", {
            required: true,
            onChange: (e: ChangeEvent<HTMLSelectElement>) =>
              updateMonth(e.target.value),
          })}
          disabled={props.isDisabled}
          className="rounded-lg bg-gray-100 border-none w-full"
        >
          {months.map((val, idx) => (
            <option value={val} key={idx}>
              {val}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
