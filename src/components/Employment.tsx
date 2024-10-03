import { Date } from "./Date";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";

export const Employment = () => {
  return (
    <section>
      <h2 className="font-bold text-xl py-4">Employment</h2>

      <form
        action="/"
        method="post"
        className="border border-solid rounded-lg border-gray-900 p-4"
      >
        <>
          <TextField name="Position" />
          <TextField name="Employer" />
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
  );
};
