import { useRef } from "react";
import { CircleButton } from "./Buttons";
import { useOpenStatus } from "../main";
import { useForm } from "react-hook-form";

function PersonalDetails() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onButtonClicked = useOpenStatus(sectionRef);
  const { register } = useForm();

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
                {...register("given-name", { required: true })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>

            <label className="block w-full">
              <span className="font-medium">Family Name</span>
              <input
                type="text"
                {...register("family-name", { required: true })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="font-medium">Headline</span>
            <input
              type="text"
              {...register("headline", { required: true })}
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
              {...register("email-address", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">Phone Number</span>
            <input
              type="text"
              {...register("phone-number", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Address</span>
          <input
            type="text"
            {...register("address", { required: true })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Post code</span>
            <input
              type="text"
              {...register("post-code", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">City</span>
            <input
              type="text"
              {...register("city", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>
      </form>
    </section>
  );
}

export { PersonalDetails };
