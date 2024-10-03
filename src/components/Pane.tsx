import PropTypes from "prop-types";
import { TextArea } from "./TextArea";
import { useEffect, useRef, useState } from "react";
import { CircleButton } from "./Buttons";

const Pane = ({ sectionName }: { sectionName: string }) => {
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
      className="my-4 collapse collapse-close"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl py-4">{sectionName}</h2>
        <CircleButton handleClick={() => onButtonClicked()} />
      </div>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="collapse-content"
      >
        <TextArea name="Description" />
      </form>
    </section>
  );
};

Pane.propTypes = {
  sectionName: PropTypes.string,
};

export { Pane };
