import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { State, useStore } from "./hooks";

export function Interests() {
  const { register } = useForm<State>();
  const updateInterests = useStore((state) => state.updateInterests);

  return (
    <Details name="resume">
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
    </Details>
  );
}

export function InterestsPreview() {
  const interests = useStore((state) => state.interests);

  return <>{interests}</>;
}
