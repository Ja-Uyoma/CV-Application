import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";

type State = {
  description: string;
};

type Action = {
  updateDescription: (description: State["description"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  description: "",
  updateDescription: (description) => set(() => ({ description: description })),
}));

export function Skills() {
  const { register } = useForm<State>();
  const updateDescription = useStore((state) => state.updateDescription);

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">Skills</span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
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
    </details>
  );
}

export function SkillsPreview() {
  const description = useStore((state) => state.description);

  return <>{description}</>;
}
