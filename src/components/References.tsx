import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";

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
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">References</span>
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
    </details>
  );
}

export function ReferencesPreview() {
  const references = useStore((state) => state.references);

  return <>{references}</>;
}
