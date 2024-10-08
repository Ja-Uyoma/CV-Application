import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";

export function Employment() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);

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
        <label className="block w-full">
          <span className="font-medium">Position</span>
          <input
            type="text"
            name="position"
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <label className="block w-full">
          <span className="font-medium">Employer</span>
          <input
            type="text"
            name="employer"
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Start Date</span>
            <input
              type="date"
              name="startDate"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">End Date</span>
            <input
              type="date"
              name="endDate"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
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

        {/*  */}
      </form>
    </section>
  );
}
