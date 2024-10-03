import { Date } from "./Date";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";

export const Education = () => {
  return (
    <>
      <section>
        <h2 className="font-bold text-xl py-4">Education</h2>

        <form
          action="/"
          method="post"
          className="border border-solid rounded-lg border-gray-900 p-4"
        >
          <>
            <TextField name="Education" />
            <TextField name="School" />
          </>
          <div className="flex gap-2">
            <Date name="Start Date" />
            <Date name="End Date" />
          </div>
          <>
            <TextArea name="Description" />
          </>
        </form>
      </section>
    </>
  );
};
