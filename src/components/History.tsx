import PropTypes from "prop-types";
import { TextArea } from "./TextArea";
import { Date } from "./Date";

const History = ({ formName }: { formName: string }) => {
  return (
    <section>
      <h2 className="font-bold text-xl py-4">{formName}</h2>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="border border-solid rounded-lg border-gray-900 p-4"
      >
        <div className="my-2">
          <label
            htmlFor="education"
            className="block font-medium text-gray-700"
          >
            {formName === "Education" ? "Education" : "Position"}
          </label>
          <input
            type="text"
            name="education"
            id="education"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </div>

        <div className="my-2">
          <label htmlFor="school" className="block font-medium text-gray-700">
            {formName === "Education" ? "School" : "Employer"}
          </label>
          <input
            type="text"
            name="school"
            id="school"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </div>

        <div className="flex gap-2 my-2">
          <Date name="Start Date" />
          <Date name="End Date" />
        </div>

        <div className="my-2">
          <TextArea name="Description" />
        </div>
      </form>
    </section>
  );
};

History.propTypes = {
  formName: PropTypes.string,
};

export { History };
