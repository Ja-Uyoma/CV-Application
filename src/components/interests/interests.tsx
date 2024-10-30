import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useInterestsStore } from "./hooks";
import { InterestsState } from "./types";
import { Form } from "../form/form";

export function Interests() {
  const { register } = useForm<InterestsState>();
  const updateInterests = useInterestsStore((state) => state.updateInterests);

  return (
    <Details name="resume">
      <Summary title="Interests" />

      <Form>
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
      </Form>
    </Details>
  );
}
