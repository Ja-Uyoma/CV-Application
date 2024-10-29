import { useForm } from "react-hook-form";
import { create } from "zustand";
import { ChangeEvent } from "react";

type State = {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Action = {
  updatePosition: (position: State["position"]) => void;
  updateEmployer: (employer: State["employer"]) => void;
  updateStartDate: (sdate: State["startDate"]) => void;
  updateEndDate: (edate: State["endDate"]) => void;
  updateDescription: (desc: State["description"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  position: "",
  employer: "",
  startDate: "",
  endDate: "",
  description: "",
  updatePosition: (pos) => set(() => ({ position: pos })),
  updateEmployer: (employer) => set(() => ({ employer: employer })),
  updateStartDate: (sdate) => set(() => ({ startDate: sdate })),
  updateEndDate: (edate) => set(() => ({ endDate: edate })),
  updateDescription: (desc) => set(() => ({ description: desc })),
}));

export function Employment() {
  const { register } = useForm<State>();

  const updatePosition = useStore((state) => state.updatePosition);
  const updateEmployer = useStore((state) => state.updateEmployer);
  const updateStartDate = useStore((state) => state.updateStartDate);
  const updateEndDate = useStore((state) => state.updateEndDate);
  const updateDescription = useStore((state) => state.updateDescription);

  return (
    <details
      name="resume"
      className="rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">Employment</span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

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
    </details>
  );
}

export function EmploymentPreview() {
  const position = useStore((state) => state.position);
  const employer = useStore((state) => state.employer);
  const startDate = useStore((state) => state.startDate);
  const endDate = useStore((state) => state.endDate);
  const description = useStore((state) => state.description);

  return (
    <>
      {position}
      {employer}
      {startDate}
      {endDate}
      {description}
    </>
  );
}
