import PropTypes from "prop-types";
import { TextArea } from "./TextArea";
import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";

const Pane = ({ name }: { name: string }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);

  return (
    <section
      tabIndex={0}
      className="collapse collapse-close bg-primary-content"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl">{name}</h2>
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
