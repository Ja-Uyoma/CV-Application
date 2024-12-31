import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useEmploymentStore } from "./hooks";
import { EmploymentState } from "./types";
import { Form } from "../form/form";
import { Label } from "../form/label";

export function Employment() {
  const { register } = useForm<EmploymentState>();

  const updatePosition = useEmploymentStore((state) => state.updatePosition);
  const updateEmployer = useEmploymentStore((state) => state.updateEmployer);
  const updateStartDate = useEmploymentStore((state) => state.updateStartDate);
  const updateEndDate = useEmploymentStore((state) => state.updateEndDate);
  const updateDescription = useEmploymentStore(
    (state) => state.updateDescription
  );

  return (
    <Details name="resume">
      <Summary title="Employment" />

      <Form>
        <Label labelText="Position">
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
        </Label>

        <Label labelText="Employer">
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
        </Label>

        <div className="flex gap-2">
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

        {/*  */}
      </Form>
    </Details>
  );
}
