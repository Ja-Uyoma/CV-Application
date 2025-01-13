import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useEducationStore } from "./hooks";
import { EducationState } from "./types";
import { Form } from "../form/form";
import { Label } from "../form/label";

export function Education() {
  const { register } = useForm<EducationState>();

  const updateEducation = useEducationStore((state) => state.updateEducation);
  const updateSchool = useEducationStore((state) => state.updateSchool);
  const updateStartDate = useEducationStore((state) => state.updateStartDate);
  const updateEndDate = useEducationStore((state) => state.updateEndDate);
  const updateDescription = useEducationStore(
    (state) => state.updateDescription
  );

  return (
    <Details name="resume">
      <Summary title="Education" />

      <Form>
        <Label labelText="Education">
          <input
            type="text"
            {...register("education", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateEducation(e.target.value),
            })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </Label>

        <Label labelText="School">
          <input
            type="text"
            {...register("school", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateSchool(e.target.value),
            })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </Label>

        <div className="flex gap-2 flex-wrap">
          <Label labelText="Start Date">
            <input
              type="date"
              {...register("startDate", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateStartDate(e.target.value),
              })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </Label>

          <Label labelText="End Date">
            <input
              type="date"
              {...register("endDate", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateEndDate(e.target.value),
              })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </Label>
        </div>

        <Label labelText="Description">
          <textarea
            {...register("description", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateDescription(e.target.value),
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
