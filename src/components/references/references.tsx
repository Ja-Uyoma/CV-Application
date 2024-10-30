import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useReferencesStore } from "./hooks";
import { ReferencesState } from "./types";
import { Form } from "../form/form";

export function References() {
  const { register } = useForm<ReferencesState>();
  const updateReferences = useReferencesStore(
    (state) => state.updateReferences
  );

  return (
    <Details name="resume">
      <Summary title="References" />

      <Form>
        <label className="block w-full">
          <span className="font-medium">Description</span>
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
        </label>
      </Form>
    </Details>
  );
}
