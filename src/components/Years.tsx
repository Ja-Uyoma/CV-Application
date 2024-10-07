export const Years = (props: { isDisabled: boolean }) => {
  const years = [];
  years.push("Year");

  for (let i = 2029; i >= 1924; i--) {
    years.push(i.toString());
  }

  return (
    <>
      <label htmlFor="years" className="block w-full">
        <select
          name="years"
          id="years"
          disabled={props.isDisabled}
          className="rounded-lg bg-gray-100 border-none min-w-full"
        >
          {years.map((val, idx) => (
            <option value={val} key={idx}>
              {val}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
