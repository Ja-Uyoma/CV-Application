import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { CircleButton } from "./Buttons";

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
      <label htmlFor="months" className="block w-full">
        <select
          name="months"
          id="months"
          disabled={isDisabled}
          className="rounded-lg bg-gray-100 border-none min-w-full"
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
      <label htmlFor="years" className="block w-full">
        <select
          name="years"
          id="years"
          disabled={isDisabled}
          className="rounded-lg bg-gray-100 border-none min-w-full"
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
        <span className="font-medium text-gray-700 p-1">Present</span>
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const onButtonClicked = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (section && isOpen) {
      section.classList.remove("collapse-close");
      section.classList.add("collapse-open");
    } else if (section && !isOpen) {
      section.classList.remove("collapse-open");
      section.classList.add("collapse-close");
    }
  }, [isOpen]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section
      tabIndex={0}
      className="my-4 collapse collapse-close"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl my-5">Certificates</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border-solid border rounded-lg border-gray-900 p-4 flex flex-col gap-1 collapse-content"
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
