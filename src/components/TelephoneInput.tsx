import { createIDFromName } from "../main";

export const TelephoneInput = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id}>
        <span className="block font-medium text-gray-700">{name}</span>
        <input
          type="tel"
          name={name}
          id={id}
          required
          autoComplete="on"
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
