import PropTypes from "prop-types";

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
          <div className="flex-1">
            <label
              htmlFor="start-date"
              className="block font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              name="start-date"
              id="start-date"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="end-date"
              className="block font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </div>
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
