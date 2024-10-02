import PropTypes from "prop-types";
import { createIDFromName } from "../main";

const Date = ({ name }: { name: string }) => {
  const id = createIDFromName(name);

  return (
    <>
      <label htmlFor={id} className="block w-full">
        <span className="font-medium text-gray-700">{name}</span>
        <input
          type="date"
          name={name}
          id={id}
          className="bg-gray-100 rounded-lg border-none w-full"
        />
      </label>
    </>
  );
};

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
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            className="bg-gray-100 border-none w-full"
          ></textarea>
        </div>
      </form>
    </section>
  );
};

History.propTypes = {
  formName: PropTypes.string,
};

export { History };
