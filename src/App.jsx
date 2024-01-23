export const EducationForm = () => {
  return (
    <form action="/" method="post">
      <div>
        <label htmlFor="education">Education</label>
        <input type="text" name="education" id="education" />
      </div>

      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" />
      </div>

      <fieldset className="dates">
        <div>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" name="start-date" id="start-date" />
        </div>

        <div>
          <label htmlFor="end-date">End Date</label>
          <input type="date" name="end-date" id="end-date" />
        </div>
      </fieldset>

      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
      </div>
    </form>
  );
};

const TextArea = ({ sectionName }) => {
  return (
    <section>
      <h2>{sectionName}</h2>

      <form action="/" method="post">
        <label htmlFor="description">Description</label>

        <textarea name="description" id="description" cols="30" rows="10">
        </textarea>
      </form>
    </section>
  );
};

function App() {
  return (
    <main>
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
    </main>
  );
}

export default App
