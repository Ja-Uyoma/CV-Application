import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { Date } from "./Date";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";
import { useOpenStatus } from "../main";

export const Education = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);

  return (
    <section
      tabIndex={0}
      className="collapse collapse-close bg-primary-content"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl">Education</h2>
        <CircleButton handleClick={onButtonClicked} />
      </div>

      <form
        action="/"
        method="post"
        className="border border-solid rounded-lg border-gray-900 collapse-content"
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
