import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";

const Months = ({ isDisabled }: { isDisabled: boolean }) => {
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

  return (
    <>
      <label htmlFor="months">
        <select
          name="months"
          id="months"
          disabled={isDisabled}
          className="flex-1 rounded-lg bg-gray-100 border-none"
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
};

const Years = ({ isDisabled }: { isDisabled: boolean }) => {
  const years = [];
  years.push("Year");

  for (let i = 2029; i >= 1924; i--) {
    years.push(i.toString());
  }

  return (
    <>
      <label htmlFor="years">
        <select
          name="years"
          id="years"
          disabled={isDisabled}
          className="flex-1 rounded-lg bg-gray-100 border-none"
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
};

const CheckBox = ({
  isChecked,
  onChangeHandler,
}: {
  isChecked: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label htmlFor="present">
        <span className="p-1">Present</span>
        <input
          type="checkbox"
          name="present"
          id="present"
          checked={isChecked}
          onChange={onChangeHandler}
          className="form-checkbox w-3 h-3"
        />
      </label>
    </>
  );
};

const Certificates = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="my-4">
      <h2 className="font-bold text-xl my-5">Certificates</h2>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border-solid border rounded-lg border-gray-900 p-4 flex flex-col gap-1"
      >
        <TextField name="Certificate" />

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Period</span>
          <CheckBox
            isChecked={isChecked}
            onChangeHandler={handleCheckBoxChecked}
          />
        </div>
        <div className="flex justify-between gap-2">
          <Months isDisabled={isChecked} />

          <Years isDisabled={isChecked} />
        </div>

        <TextArea name="Description" />
      </form>
    </section>
  );
};

export { Certificates };
