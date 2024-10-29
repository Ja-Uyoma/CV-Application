import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useStore } from "./hooks";
import { QualificationsState } from "./types";

export function Qualifications() {
  const { register } = useForm<QualificationsState>();
  const updateQualifications = useStore((state) => state.updateQualifications);

  return (
    <Details name="resume">
      <Summary title="Qualifications" />

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
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
      </form>
    </Details>
  );
}
