import { Pane } from "./Pane.tsx";
import { History } from "./History.tsx";
import { Certificates } from "./Certificates.tsx";
import { BasicInformation } from "./BasicInformation.tsx";

export const ResumeBuilder = () => {
  return (
    <div className="w-1/2 m-auto">
      <BasicInformation />
      <History formName={"Education"} />
      <Pane sectionName={"Qualifications"} />
      <Pane sectionName={"Interests"} />
      <Pane sectionName={"References"} />
      <Pane sectionName={"Skills"} />
      <History formName={"Work Experience"} />
      <Certificates />
    </div>
  );
};
