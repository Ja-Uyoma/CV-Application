import PropTypes from "prop-types";
import { TextArea } from "./TextArea";

const Pane = ({ sectionName }: { sectionName: string }) => {
  return (
    <section className="my-4">
      <h2 className="font-bold text-xl my-5">{sectionName}</h2>

      <form action="/" method="post" autoComplete="off">
        <TextArea name="Description" />
      </form>
    </section>
  );
};

Pane.propTypes = {
  sectionName: PropTypes.string,
};

export { Pane };
