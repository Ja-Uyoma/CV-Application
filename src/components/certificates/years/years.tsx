import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { YearsState } from "./types";
import { useYearsStore } from "./hooks";

export function Years(props: { isDisabled: boolean }) {
  const years = [];
  years.push("Year");

  for (let i = 2029; i >= 1924; i--) {
    years.push(i.toString());
  }

  const { register } = useForm<YearsState>();
  const updateYear = useYearsStore((state) => state.updateYear);

  return (
    <>
      <label className="block w-full">
        <select
          {...register("year", {
            required: true,
            onChange: (e: ChangeEvent<HTMLSelectElement>) =>
              updateYear(e.target.value),
          })}
          disabled={props.isDisabled}
          className="rounded-lg bg-gray-100 border-none w-full"
        >
          {years.map((val, idx) => (
            <option value={val} key={idx}>
              {val}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
