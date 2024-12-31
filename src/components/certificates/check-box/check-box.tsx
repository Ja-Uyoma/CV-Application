import { ChangeEventHandler } from "react";
import { useForm } from "react-hook-form";
import { CheckBoxState } from "./types";

export function CheckBox(props: {
  isChecked: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}) {
  const { register } = useForm<CheckBoxState>();

  return (
    <>
      <label>
        <span className="font-medium p-1">Present</span>
        <input
          type="checkbox"
          {...register("present", { required: true })}
          checked={props.isChecked}
          onChange={props.onChangeHandler}
          className="form-checkbox w-3 h-3"
        />
      </label>
    </>
  );
}
