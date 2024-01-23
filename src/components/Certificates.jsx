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
    <section>
      <h2>Certificates</h2>

      <form action="/" method="post">
        <div>
          <label htmlFor="certificate">Certificate</label>
          <input type="text" name="certificate" id="certificate" />
        </div>

        <div>
          <label htmlFor="period">
            Period
            {/* */}
            <select name="period" id="period" defaultValue={"Month"}>
              <MonthList />
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="year">
            Year
            {/* */}
            <select name="year" id="year" defaultValue={"Year"}>
              <option value="Year" key={1}>
                Year
              </option>
              <YearList />
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Description
            {/** */}
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
          </label>
        </div>
      </form>
    </section>
  );
};

export { Certificates };
