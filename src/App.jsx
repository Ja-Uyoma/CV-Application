import { TextArea } from "./components/TextArea";
import { HistoryForm } from "./components/HistoryForm";

const Certificates = () => {
  const yearsOption = () => {
    let years = [];

    for (let idx = 2029; idx >= 1924; --idx) {
      years.push(<option value="${idx}">{idx}</option>);
    }

    return years;
  };

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
              <option value="month">Month</option>
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
              <option value="sep">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="year">
            Year
            {/* */}
            <select name="year" id="year" defaultValue={"Year"}>
              <option value="Year">Year</option>
              {yearsOption()}
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

function App() {
  return (
    <main>
      <HistoryForm formName={"Education"} />
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
      <HistoryForm formName={"Work Experience"} />
      <Certificates />
    </main>
  );
}

export default App;
