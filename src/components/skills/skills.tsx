import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useSkillsStore } from "./hooks";
import { SkillsState } from "./types";
import { Form } from "../form/form";

export function Skills() {
  const { register } = useForm<SkillsState>();
  const updateSkills = useSkillsStore((state) => state.updateSkills);

  return (
    <Details name="resume">
      <Summary title="Skills" />

      <Form>
        <label className="block w-full">
          <span className="font-medium">Description</span>
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
        </label>
      </Form>
    </Details>
  );
}
