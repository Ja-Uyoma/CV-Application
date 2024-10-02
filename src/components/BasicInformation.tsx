import { EmailInput } from "./EmailInput";
import { TelephoneInput } from "./TelephoneInput";
import { TextField } from "./TextInput";

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
