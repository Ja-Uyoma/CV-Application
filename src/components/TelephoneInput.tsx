import { createIDFromName } from "../main";

export const TelephoneInput = ({ name }: { name: string }) => {
  return (
    <>
      <label htmlFor={createIDFromName(name)}>
        <span className="block font-medium text-gray-700">{name}</span>
        <input
          type="tel"
          name={name}
          id={createIDFromName(name)}
          required
          autoComplete="on"
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
