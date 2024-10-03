import { useEffect, useRef, useState } from "react";
import { EmailInput } from "./EmailInput";
import { TelephoneInput } from "./TelephoneInput";
import { TextField } from "./TextField";
import { CircleButton } from "./Buttons";

const BasicInformation = () => {
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

  return (
    <section
      tabIndex={0}
      className="collapse collapse-close bg-primary-content"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl">Basic Information</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border rounded-lg border-gray-900 collapse-content"
      >
        <div className="flex justify-between gap-2">
          <TextField name="Given Name" />
          <TextField name="Family Name" />
        </div>

        <div className="flex justify-between gap-2">
          <EmailInput name="Email Address" />
          <TelephoneInput name="Phone Number" />
        </div>

        <TextField name="Headline" />

        <TextField name="Address" />

        <div className="flex gap-2 my-2">
          <div className="flex-1">
            <TextField name="Postal Code" />
          </div>

          <div className="flex-1">
            <TextField name="City" />
          </div>
        </div>
      </form>
    </section>
  );
};

export { BasicInformation };
