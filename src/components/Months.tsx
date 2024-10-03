export const Months = ({ isDisabled }: { isDisabled: boolean }) => {
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
      <label htmlFor="months" className="block w-full">
        <select
          name="months"
          id="months"
          disabled={isDisabled}
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
