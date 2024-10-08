import { ChangeEventHandler } from "react";

export function CheckBox(props: {
  isChecked: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <label>
        <span className="font-medium p-1">Present</span>
        <input
          type="checkbox"
          name="present"
          checked={props.isChecked}
          onChange={props.onChangeHandler}
          className="form-checkbox w-3 h-3"
        />
      </label>
    </>
  );
}
