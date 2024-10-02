import { createIDFromName } from "../main";

export const TextArea = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id}>
        <span className="block font-medium text-gray-700">{name}</span>
        <textarea
          name={name}
          id={id}
          cols={80}
          rows={10}
          className="bg-gray-100 border-none w-full"
        ></textarea>
      </label>
    </>
  );
};
