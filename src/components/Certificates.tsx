import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";
import { Months } from "./Months";
import { Years } from "./Years";

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
        <span className="font-medium p-1">Present</span>
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section
      tabIndex={0}
      className="collapse collapse-close bg-primary-content"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl">Certificates</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border-solid border rounded-lg border-gray-900 flex flex-col gap-1 collapse-content"
      >
        <TextField name="Certificate" />

        <div className="flex justify-between">
          <span className="font-medium">Period</span>
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
