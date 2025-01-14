import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Details } from "../details/details";
import { useSkillsStore } from "./hooks";
import { SkillsState } from "./types";
import { Form } from "../form/form";
import { Label } from "../form/label";

export function Skills() {
  const { register } = useForm<SkillsState>();
  const updateSkills = useSkillsStore((state) => state.updateSkills);

  return (
    <Details title="Skills">
      <Form>
        <Label labelText="Description">
          <textarea
            {...register("skills", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateSkills(e.target.value),
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
