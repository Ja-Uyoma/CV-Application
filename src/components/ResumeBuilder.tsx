import { Pane } from "./Pane.tsx";
import { Certificates } from "./Certificates.tsx";
import { BasicInformation } from "./BasicInformation.tsx";
import { Education } from "./Education.tsx";
import { Employment } from "./Employment.tsx";

export function ResumeBuilder() {
  return (
    <div className="w-1/2 flex flex-col gap-2">
      <BasicInformation />
      <Education />
      <Pane name={"Qualifications"} />
      <Pane name={"Interests"} />
      <Pane name={"References"} />
      <Pane name={"Skills"} />
      <Employment />
      <Certificates />
    </div>
  );
}
