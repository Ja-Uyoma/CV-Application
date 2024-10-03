import { createIDFromName } from "../main";

export const Date = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <span className="font-medium">{name}</span>
        <input
          type="date"
          name={name}
          id={id}
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
