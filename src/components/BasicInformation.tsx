import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";

const BasicInformation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);

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
        <div className="flex flex-col">
          <div className="flex justify-between gap-2">
            <label className="block w-full">
              <span className="font-medium">Given Name</span>
              <input
                type="text"
                name="given-name"
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>

            <label className="block w-full">
              <span className="font-medium">Family Name</span>
              <input
                type="text"
                name="family-name"
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="font-medium">Headline</span>
            <input
              type="text"
              name="headline"
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <div className="flex justify-between gap-2">
          <label className="block w-full">
            <span className="font-medium">Email Address</span>
            <input
              type="email"
              name="email-address"
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">Phone Number</span>
            <input
              type="text"
              name="phone-number"
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Address</span>
          <input
            type="text"
            name="address"
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Post code</span>
            <input
              type="text"
              name="post-code"
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">City</span>
            <input
              type="text"
              name="city"
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export { BasicInformation };
