import { ChangeEventHandler } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  present: string;
}

export function CheckBox(props: {
  isChecked: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}) {
  const { register } = useForm<Inputs>();

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
