export const Months = (props: { isDisabled: boolean }) => {
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <label className="block w-full">
        <select
          name="months"
          disabled={props.isDisabled}
          className="rounded-lg bg-gray-100 border-none min-w-full"
        >
          {months.map((val, idx) => (
            <option value={val} key={idx}>
              {val}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
