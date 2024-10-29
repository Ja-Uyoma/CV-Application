import { ChangeEvent, useState } from "react";
import { Months } from "./months/months";
import { Years } from "./years/years";
import { CheckBox } from "./check-box/check-box";
import { useForm } from "react-hook-form";
import { Details } from "../details/details";
import { CertificateState } from "./types";
import { useCertificateStore } from "./hooks";
import { Summary } from "../details/summary";

function Certificates() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const { register } = useForm<CertificateState>();

  const updateCertificate = useCertificateStore(
    (state) => state.updateCertificate
  );
  const updateDescription = useCertificateStore(
    (state) => state.updateDescription
  );

  return (
    <Details name="resume">
      <Summary title="Certificates" />

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

export { Certificates };
