import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { State, useEducationStore } from "./hooks";

export function Education() {
  const { register } = useForm<State>();

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

      <form action="/" method="post" className="rounded-lg space-y-2">
        <label className="block w-full">
          <span className="font-medium">Education</span>
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
        </label>

        <label className="block w-full">
          <span className="font-medium">School</span>
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
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Start Date</span>
            <input
              type="date"
              {...register("startDate", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateStartDate(e.target.value),
              })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">End Date</span>
            <input
              type="date"
              {...register("endDate", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateEndDate(e.target.value),
              })}
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Description</span>
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
        </label>
      </form>
    </Details>
  );
}

export function EducationPreview() {
  const education = useEducationStore((state) => state.education);
  const school = useEducationStore((state) => state.school);
  const startDate = useEducationStore((state) => state.startDate);
  const endDate = useEducationStore((state) => state.endDate);
  const description = useEducationStore((state) => state.description);

  return (
    <>
      <p>{education}</p>
      <p>{school}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
    </>
  );
}
