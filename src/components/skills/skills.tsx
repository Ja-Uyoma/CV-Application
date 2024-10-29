import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { State, useStore } from "./hooks";

export function Skills() {
  const { register } = useForm<State>();
  const updateSkills = useStore((state) => state.updateSkills);

  return (
    <Details name="resume">
      <Summary title="Skills" />

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
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
      </form>
    </Details>
  );
}
