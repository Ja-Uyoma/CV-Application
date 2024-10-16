import { ChangeEvent, useState } from "react";
import { Months } from "./Months";
import { Years } from "./Years";
import { CheckBox } from "./CheckBox";
import { useForm } from "react-hook-form";
import { CertificateData } from "../types/Certificates";

function Certificates() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const { register } = useForm<CertificateData>();

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">Certificates</span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="rounded-lg flex flex-col gap-2"
      >
        <label className="block w-full">
          <span className="font-medium">Certificate</span>
          <input
            type="text"
            {...register("certificate", { required: true })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex justify-between">
          <span className="font-medium">Period</span>
          <CheckBox
            isChecked={isChecked}
            onChangeHandler={handleCheckBoxChecked}
          />
        </div>
        <div className="flex justify-between gap-2">
          <Months isDisabled={isChecked} />

          <Years isDisabled={isChecked} />
        </div>

        <label className="block w-full">
          <span className="font-medium">Description</span>
          <textarea
            {...register("description", { required: true })}
            cols={80}
            rows={10}
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>
      </form>
    </details>
  );
}

export { Certificates };
