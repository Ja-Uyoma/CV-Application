import { useEffect, useRef, useState } from "react";
import { Date } from "./Date";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";
import { CircleButton } from "./Buttons";

export const Employment = () => {
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
        <h2 className="font-bold text-xl">Employment</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        className="border border-solid rounded-lg border-gray-900 collapse-content"
      >
        <>
          <TextField name="Position" />
          <TextField name="Employer" />
        </>
        <div className="flex gap-2">
          <Date name="Start Date" />
          <Date name="End Date" />
        </div>
        <>
          <TextArea name="Description" />
        </>
      </form>
    </section>
  );
};
