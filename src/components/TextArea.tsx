import PropTypes from "prop-types";

const TextArea = ({ sectionName }: { sectionName: string }) => {
  return (
    <section className="my-4">
      <h2 className="font-bold text-xl my-5">{sectionName}</h2>

      <form action="/" method="post" autoComplete="off">
        <label htmlFor="description">
          <div className="font-medium text-gray-700">Description</div>
          {/** */}
          <textarea
            name="description"
            id="description"
            cols={80}
            rows={10}
            className="bg-gray-100 border-none w-full"
          ></textarea>
        </label>
      </form>
    </section>
  );
};

TextArea.propTypes = {
  sectionName: PropTypes.string,
};

export { TextArea };
