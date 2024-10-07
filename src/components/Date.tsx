import { createIDFromName } from "../main";

export const Date = (props: { name: string }) => {
  const id = createIDFromName(props.name);

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <span className="font-medium">{props.name}</span>
        <input
          type="date"
          name={props.name}
          id={id}
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
