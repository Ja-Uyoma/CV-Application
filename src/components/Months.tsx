import { useForm } from "react-hook-form";

interface Inputs {
  months: string;
}

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
