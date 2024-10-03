import { Pane } from "./Pane.tsx";
import { Certificates } from "./Certificates.tsx";
import { BasicInformation } from "./BasicInformation.tsx";
import { Education } from "./Education.tsx";
import { Employment } from "./Employment.tsx";

export const ResumeBuilder = () => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <BasicInformation />
      <Education />
      <Pane sectionName={"Qualifications"} />
      <Pane sectionName={"Interests"} />
      <Pane sectionName={"References"} />
      <Pane sectionName={"Skills"} />
      <Employment />
      <Certificates />
    </div>
  );
};
