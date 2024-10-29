import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import { Summary } from "../details/summary";
import { Details } from "../details/details";

type State = {
  references: string;
};

type Action = {
  updateReferences: (description: State["references"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  references: "",
  updateReferences: (references) => set(() => ({ references: references })),
}));

export function References() {
  const { register } = useForm<State>();
  const updateReferences = useStore((state) => state.updateReferences);

  return (
    <Details name="resume">
      <Summary title="References" />

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("references", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateReferences(e.target.value),
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

export function ReferencesPreview() {
  const references = useStore((state) => state.references);

  return <>{references}</>;
}
