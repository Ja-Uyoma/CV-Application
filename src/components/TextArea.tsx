import { createIDFromName } from "../main";

export const TextArea = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id}>
        <span className="block font-medium">{name}</span>
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
