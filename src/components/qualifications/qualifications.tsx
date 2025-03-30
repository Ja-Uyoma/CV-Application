import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Details } from "../details/details";
import { useQualificationsStore } from "./hooks";
import { QualificationsState } from "./types";
import { Form } from "../form/form";
import { Label } from "../form/label";

export function Qualifications() {
  const { register } = useForm<QualificationsState>();
  const updateQualifications = useQualificationsStore(
    (state) => state.updateQualifications
  );

  return (
    <Details title="Qualifications">
      <Form>
        <Label labelText="Description">
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
        </Label>
      </Form>
    </Details>
  );
}
