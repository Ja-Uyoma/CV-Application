import { useEffect, useRef, useState } from "react";
import { CircleButton } from "./Buttons";
import { Date } from "./Date";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";

export const Education = () => {
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
    <section tabIndex={0} className="collapse collapse-close" ref={sectionRef}>
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl py-4">Education</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        className="border border-solid rounded-lg border-gray-900 p-4 collapse-content"
      >
        <>
          <TextField name="Education" />
          <TextField name="School" />
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
