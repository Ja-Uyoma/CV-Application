import { EmailInput } from "./EmailInput";
import { TelephoneInput } from "./TelephoneInput";
import { TextField } from "./TextField";

const ChevronUp = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </>
  );
};

const BasicInformation = () => {
  return (
    <section tabIndex={0} className="collapse collapse-open">
      <h2 className="font-bold text-xl py-4 collapse-title">
        Basic Information
      </h2>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border rounded-lg border-gray-900 p-4 collapse-content"
      >
        <div className="flex gap-2 my-2">
          <div className="flex-1">
            <TextField name="Given Name" />
          </div>

          <div className="flex-1">
            <TextField name="Family Name" />
          </div>
        </div>

        <div className="my-2">
          <EmailInput name="Email Address" />
        </div>

        <div className="my-2">
          <TextField name="Headline" />
        </div>

        <div className="my-2">
          <TelephoneInput name="Phone Number" />
        </div>

        <div className="my-2">
          <TextField name="Address" />
        </div>

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
