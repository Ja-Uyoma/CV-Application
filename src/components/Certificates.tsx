import { ChangeEvent, useState } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";

const Months = () => {
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
        className="border-solid border rounded-lg border-gray-900 p-4"
      >
        <div>
          <TextField name="Certificate" />
        </div>

        <div className="my-3">
          <label htmlFor="period">
            <div className="flex">
              <span className="font-medium text-gray-700 flex-1">Period</span>
              <span>
                <input
                  type="checkbox"
                  name="present"
                  id="present"
                  checked={isChecked}
                  onChange={handleCheckBoxChecked}
                  className="form-checkbox w-3 h-3"
                />
                <span className="p-1">Present</span>
              </span>
            </div>
            <div className="flex gap-2">
              <Months />

              <Years isDisabled={isChecked} />
            </div>
          </label>
        </div>

        <div>
          <TextArea name="Description" />
        </div>
      </form>
    </section>
  );
};

export { Certificates };
