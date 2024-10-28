import { useForm } from "react-hook-form";
import { EducationData } from "../types/Education";
import { create } from "zustand";
import { ChangeEvent } from "react";

type Action = {
  updateEducation: (education: EducationData["education"]) => void;
  updateSchool: (school: EducationData["school"]) => void;
  updateStartDate: (startDate: EducationData["startDate"]) => void;
  updateEndDate: (endDate: EducationData["endDate"]) => void;
  updateDescription: (description: EducationData["description"]) => void;
};

const useEducationStore = create<EducationData & Action>((set) => ({
  education: "",
  school: "",
  startDate: "",
  endDate: "",
  description: "",
  updateEducation: (education) => set(() => ({ education: education })),
  updateSchool: (school) => set(() => ({ school: school })),
  updateStartDate: (startDate) => set(() => ({ startDate: startDate })),
  updateEndDate: (endDate) => set(() => ({ endDate: endDate })),
  updateDescription: (description) => set(() => ({ description: description })),
}));

export function Education() {
  const { register } = useForm<EducationData>();

  const updateEducation = useEducationStore((state) => state.updateEducation);
  const updateSchool = useEducationStore((state) => state.updateSchool);
  const updateStartDate = useEducationStore((state) => state.updateStartDate);
  const updateEndDate = useEducationStore((state) => state.updateEndDate);
  const updateDescription = useEducationStore(
    (state) => state.updateDescription
  );

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">Education</span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

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
          ></textarea>
        </label>
      </form>
    </details>
  );
}
