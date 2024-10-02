export const EmailInput = ({ name }: { name: string }) => {
  return (
    <>
      <label htmlFor={name}>
        <span className="block font-medium text-gray-700">{name}</span>
        <input
          type="email"
          name={name}
          id={name}
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};
