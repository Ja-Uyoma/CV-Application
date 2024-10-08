import { ChangeEvent, useRef, useState } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";
import { Months } from "./Months";
import { Years } from "./Years";
import { CheckBox } from "./CheckBox";

function Certificates() {
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
        <label className="block w-full">
          <span className="font-medium">Certificate</span>
          <input
            type="text"
            name="certificate"
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

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

        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            name="description"
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          ></textarea>
        </label>
      </form>
    </section>
  );
}

export { Certificates };
