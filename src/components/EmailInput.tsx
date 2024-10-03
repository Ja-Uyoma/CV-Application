import { createIDFromName } from "../main";

export const EmailInput = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <span className="block font-medium ">{name}</span>
        <input
          type="email"
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
