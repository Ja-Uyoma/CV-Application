import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import { Summary } from "./Summary";

type State = {
  interests: string;
};

type Action = {
  updateInterests: (description: State["interests"]) => void;
};

const useStore = create<State & Action>()((set) => ({
  interests: "",
  updateInterests: (interests) => set(() => ({ interests: interests })),
}));

export function Interests() {
  const { register } = useForm<State>();
  const updateInterests = useStore((state) => state.updateInterests);

  return (
    <details
      name="resume"
      className="rounded-none space-y-2 cursor-pointer pb-3 w-11/12 mx-auto"
    >
      <Summary title="Interests" />

      <form action="/" method="post" autoComplete="off" className="rounded-lg">
        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("interests", {
              required: true,
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
                updateInterests(e.target.value),
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

export function InterestsPreview() {
  const interests = useStore((state) => state.interests);

  return <>{interests}</>;
}
