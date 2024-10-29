import { ChangeEvent, useState } from "react";
import { Months, MonthsPreview } from "./months";
import { Years, YearsPreview } from "./years";
import { CheckBox } from "./check-box";
import { useForm } from "react-hook-form";
import { Details } from "../details/details";
import { State } from "./types";
import { useStore } from "./hooks";

function Certificates() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const { register } = useForm<State>();

  const updateCertificate = useStore((state) => state.updateCertificate);
  const updateDescription = useStore((state) => state.updateDescription);

  return (
    <Details name="resume">
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
            {...register("certificate", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateCertificate(e.target.value),
            })}
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
            {...register("description", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateDescription(e.target.value),
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

export function CertificatesPreview() {
  const certificate = useStore((state) => state.certificate);
  const description = useStore((state) => state.description);

  return (
    <>
      {certificate}
      <MonthsPreview />
      <YearsPreview />
      {description}
    </>
  );
}

export { Certificates };
