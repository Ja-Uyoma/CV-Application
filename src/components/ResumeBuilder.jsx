import { TextArea } from "./TextArea.jsx";
import { History } from "./History.jsx";
import { Certificates } from "./Certificates.jsx";
import { BasicInformation } from "./BasicInformation.jsx";

export const ResumeBuilder = () => {
  return (
    <div className="w-1/2 m-auto">
      <BasicInformation />
      <History formName={"Education"} />
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
      <History formName={"Work Experience"} />
      <Certificates />
    </div>
  );
};
