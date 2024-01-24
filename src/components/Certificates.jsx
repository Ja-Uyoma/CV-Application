import { v4 as uuidv4 } from "uuid";

const MonthList = () => {
  const months = [
    { month: "Month", id: uuidv4() },
    { month: "January", id: uuidv4() },
    { month: "February", id: uuidv4() },
    { month: "March", id: uuidv4() },
    { month: "April", id: uuidv4() },
    { month: "May", id: uuidv4() },
    { month: "June", id: uuidv4() },
    { month: "July", id: uuidv4() },
    { month: "August", id: uuidv4() },
    { month: "September", id: uuidv4() },
    { month: "October", id: uuidv4() },
    { month: "November", id: uuidv4() },
    { month: "December", id: uuidv4() },
  ];

  return (
    <>
      {months.map((month) => (
        <option value={month.month} key={month.id}>
          {month.month}
        </option>
      ))}
    </>
  );
};

const YearList = () => {
  let years = [];
  years.push({ textual: "Year", numeric: "Year", id: uuidv4() });

  for (let i = 2029; i >= 1924; --i) {
    years.push({ texual: `${i}`, numeric: i, id: uuidv4() });
  }

  return (
    <>
      {years.map((year) => (
        <option value={year.texual} key={year.id}>
          {year.numeric}
        </option>
      ))}
    </>
  );
};

const Certificates = () => {
  return (
    <section className="my-4">
      <h2 className="font-bold text-xl my-5">Certificates</h2>

      <form action="/" method="post" autoComplete="off">
        <div>
          <label htmlFor="certificate">
            <span className="block font-medium text-gray-700">Certificate</span>
            {/** */}
            <input type="text" name="certificate" id="certificate" />
          </label>
        </div>

        <div>
          <label htmlFor="period">
            <div>
              <span className="font-medium text-gray-700">Period</span>
              <input type="checkbox" name="present" id="present" />
              <span>Present</span>
            </div>
            <div>
              <select name="period" id="period" defaultValue={"Month"}>
                <MonthList />
              </select>

              <select name="year" id="year" defaultValue={"Year"}>
                <YearList />
              </select>
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="description">
            <span className="block font-medium text-gray-700">Description</span>
            {/** */}
            <textarea
              name="description"
              id="description"
              cols="80"
              rows="10"
              className="bg-gray-100 border-none"
            ></textarea>
          </label>
        </div>
      </form>
    </section>
  );
};

export { Certificates };
