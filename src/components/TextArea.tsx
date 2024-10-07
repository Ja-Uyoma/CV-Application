import { createIDFromName } from "../main";

export const TextArea = (props: { name: string }) => {
  const id = createIDFromName(props.name);

  return (
    <>
      <label htmlFor={id}>
        <span className="block font-medium">{props.name}</span>
        <textarea
          name={props.name}
          id={id}
          cols={80}
          rows={10}
          className="bg-gray-100 border-none w-full"
        ></textarea>
      </label>
    </>
  );
};
