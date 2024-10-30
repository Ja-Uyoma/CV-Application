import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useQualificationsStore } from "./hooks";
import { QualificationsState } from "./types";
import { Form } from "../form/form";

export function Qualifications() {
  const { register } = useForm<QualificationsState>();
  const updateQualifications = useQualificationsStore(
    (state) => state.updateQualifications
  );

  return (
    <Details name="resume">
      <Summary title="Qualifications" />

      <Form>
        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("qualifications", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateQualifications(e.target.value),
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
