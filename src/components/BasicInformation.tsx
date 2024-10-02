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
          <label htmlFor="email">
            <span className="block font-medium text-gray-700">
              Email Address
            </span>
            {/** */}
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <div className="my-2">
          <TextInput name="Headline" />
        </div>

        <div className="my-2">
          <label htmlFor="phone-number">
            <span className="block font-medium text-gray-700">
              Phone Number
            </span>
            {/** */}
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
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
