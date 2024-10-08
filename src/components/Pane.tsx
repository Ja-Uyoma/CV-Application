import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";
import { useForm } from "react-hook-form";

interface Inputs {
  description: string;
}

function Pane(props: { name: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);
  const { register } = useForm<Inputs>();

  return (
    <section
      tabIndex={0}
      className="collapse collapse-close bg-primary-content"
      ref={sectionRef}
    >
      <div className="collapse-title flex justify-between items-center">
        <h2 className="font-bold text-xl">{props.name}</h2>
        <CircleButton handleClick={() => onButtonClicked()} />
      </div>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="collapse-content"
      >
        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("description", { required: true })}
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          ></textarea>
        </label>
      </form>
    </section>
  );
}

export { Pane };
