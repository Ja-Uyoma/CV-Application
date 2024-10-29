import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useStore } from "./hooks";
import { EmploymentState } from "./types";

export function Employment() {
  const { register } = useForm<EmploymentState>();

  const updatePosition = useStore((state) => state.updatePosition);
  const updateEmployer = useStore((state) => state.updateEmployer);
  const updateStartDate = useStore((state) => state.updateStartDate);
  const updateEndDate = useStore((state) => state.updateEndDate);
  const updateDescription = useStore((state) => state.updateDescription);

  return (
    <Details name="resume">
      <Summary title="Employment" />

      <form action="/" method="post" className="rounded-lg space-y-2">
        <label className="block w-full">
          <span className="font-medium">Position</span>
          <input
            type="text"
            {...register("position", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updatePosition(e.target.value),
            })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <label className="block w-full">
          <span className="font-medium">Employer</span>
          <input
            type="text"
            {...register("employer", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateEmployer(e.target.value),
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

        {/*  */}
      </form>
    </Details>
  );
}
