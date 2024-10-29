import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import { Summary } from "./Summary";

type State = {
  qualifications: string;
};

type Action = {
  updateQualifications: (description: State["qualifications"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  qualifications: "",
  updateQualifications: (qualifications) =>
    set(() => ({ qualifications: qualifications })),
}));

export function Qualifications() {
  const { register } = useForm<State>();
  const updateQualifications = useStore((state) => state.updateQualifications);

  return (
    <details
      name="resume"
      className="rounded-none space-y-2 cursor-pointer pb-3 w-11/12 mx-auto"
    >
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
    </details>
  );
}

export function QualificationsPreview() {
  const qualifications = useStore((state) => state.qualifications);

  return <>{qualifications}</>;
}
