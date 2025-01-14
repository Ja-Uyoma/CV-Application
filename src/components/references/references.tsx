import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Details } from "../details/details";
import { useReferencesStore } from "./hooks";
import { ReferencesState } from "./types";
import { Form } from "../form/form";
import { Label } from "../form/label";

export function References() {
  const { register } = useForm<ReferencesState>();
  const updateReferences = useReferencesStore(
    (state) => state.updateReferences
  );

  return (
    <Details title="References">
      <Form>
        <Label labelText="Description">
          <textarea
            {...register("references", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateReferences(e.target.value),
            })}
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </Label>
      </Form>
    </Details>
  );
}
