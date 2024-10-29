import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { State, useStore } from "./hooks";

export function Education() {
  const { register } = useForm<State>();

  const updateEducation = useStore((state) => state.updateEducation);
  const updateSchool = useStore((state) => state.updateSchool);
  const updateStartDate = useStore((state) => state.updateStartDate);
  const updateEndDate = useStore((state) => state.updateEndDate);
  const updateDescription = useStore((state) => state.updateDescription);

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
  const education = useStore((state) => state.education);
  const school = useStore((state) => state.school);
  const startDate = useStore((state) => state.startDate);
  const endDate = useStore((state) => state.endDate);
  const description = useStore((state) => state.description);

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
