import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";

type State = {
  skills: string;
};

type Action = {
  updateSkills: (description: State["skills"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  skills: "",
  updateSkills: (description) => set(() => ({ skills: description })),
}));

export function Skills() {
  const { register } = useForm<State>();
  const updateSkills = useStore((state) => state.updateSkills);

  return (
    <details
      name="resume"
      className="rounded-none space-y-2 cursor-pointer pb-3 w-11/12 mx-auto"
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
    </details>
  );
}

export function SkillsPreview() {
  const skills = useStore((state) => state.skills);

  return <>{skills}</>;
}
