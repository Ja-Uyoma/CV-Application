import PropTypes from "prop-types";

const TextArea = ({ sectionName }) => {
    return (
        <section>
            <h2>{sectionName}</h2>

            <form action="/" method="post">
                <label htmlFor="description">Description</label>

                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </form>
        </section>
    );
};

TextArea.propTypes = {
    sectionName: PropTypes.string,
};

export { TextArea };