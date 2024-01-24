import PropTypes from "prop-types";

const TextArea = ({ sectionName }) => {
  return (
    <section>
      <h2 className="font-bold text-xl">{sectionName}</h2>

      <form action="/" method="post" autoComplete="off">
        <label htmlFor="description">
          <div className="block">Description</div>
          {/** */}
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </label>
      </form>
    </section>
  );
};

TextArea.propTypes = {
  sectionName: PropTypes.string,
};

export { TextArea };
