import { createIDFromName } from "../main";

export const TextInput = ({ name }: { name: string }) => {
  return (
    <>
      <label htmlFor={createIDFromName(name)}>
        <span className="block font-medium text-gray-700">{name}</span>
        <input
          type="text"
          name={name}
          id={createIDFromName(name)}
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
