import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";

interface Inputs {
  months: string;
}

type Action = {
  updateMonth: (month: Inputs["months"]) => void;
};

const useStore = create<Inputs & Action>()((set) => ({
  months: "",
  updateMonth: (month) => set(() => ({ months: month })),
}));

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

  const { register } = useForm<Inputs>();

  return (
    <>
      <label className="block w-full">
        <select
          {...register("months", { required: true })}
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
