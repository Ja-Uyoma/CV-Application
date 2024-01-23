import PropTypes from "prop-types";

/**
 * This returns a form which can be used to describe someone's employment
 * or education history
 * @param {string} formName The type of form, either an education or employment history form
 * @returns JSX that renders the appropriate form depending on the name givens
 */
const History = ({ formName }) => {
  return (
    <section>
      <h2>{formName}</h2>

      <form action="/" method="post" autoComplete="off">
        <div>
          <label htmlFor="education">{formName === "Education" ? "Education" : "Position"}</label>
          <input type="text" name="education" id="education" />
        </div>

        <div>
          <label htmlFor="school">{formName === "Education" ? "School" : "Employer"}</label>
          <input type="text" name="school" id="school" />
        </div>

        <div>
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" name="start-date" id="start-date" />
          </div>

          <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" name="end-date" id="end-date" />
          </div>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>
      </form>
    </section>
  );
};

History.propTypes = {
  formName: PropTypes.string,
};

export { History };
