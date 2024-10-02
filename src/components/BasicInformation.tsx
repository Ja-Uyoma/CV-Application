import { EmailInput } from "./EmailInput";
import { TelephoneInput } from "./TelephoneInput";
import { TextInput } from "./TextInput";

const BasicInformation = () => {
  return (
    <section>
      <h2 className="font-bold text-xl py-4">Basic Information</h2>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border rounded-lg border-gray-900 p-4"
      >
        <div className="flex gap-2 my-2">
          <div className="flex-1">
            <TextInput name="Given Name" />
          </div>

          <div className="flex-1">
            <TextInput name="Family Name" />
          </div>
        </div>

        <div className="my-2">
          <EmailInput name="Email Address" />
        </div>

        <div className="my-2">
          <TextInput name="Headline" />
        </div>

        <div className="my-2">
          <TelephoneInput name="Phone Number" />
        </div>

        <div className="my-2">
          <TextInput name="Address" />
        </div>

        <div className="flex gap-2 my-2">
          <div className="flex-1">
            <TextInput name="Postal Code" />
          </div>

          <div className="flex-1">
            <TextInput name="City" />
          </div>
        </div>
      </form>
    </section>
  );
};

export { BasicInformation };
