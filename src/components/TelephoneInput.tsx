import { createIDFromName } from "../main";

export const TelephoneInput = (props: { name: string }) => {
  const id = createIDFromName(props.name);

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <span className="block font-medium">{props.name}</span>
        <input
          type="tel"
          name={props.name}
          id={id}
          required
          autoComplete="on"
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
