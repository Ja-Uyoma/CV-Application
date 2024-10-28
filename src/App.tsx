import { Certificates, CertificatesPreview } from "./components/Certificates";
import { Education, EducationPreview } from "./components/Education";
import { Employment, EmploymentPreview } from "./components/Employment";
import { Pane } from "./components/Pane";
import {
  PersonalDetails,
  PersonalDetailsPreview,
} from "./components/PersonalDetails";

function App() {
  return (
    <main className="flex">
      <div className="flex flex-1 flex-col gap-1">
        <PersonalDetails />
        <Education />
        <Pane name={"Qualifications"} />
        <Pane name={"Interests"} />
        <Pane name={"References"} />
        <Pane name={"Skills"} />
        <Employment />
        <Certificates />
      </div>

      <div className="flex-1">
        <p className="text-center font-medium text-xl">Resume</p>
        <PersonalDetailsPreview />
        <EducationPreview />
        <EmploymentPreview />
        <CertificatesPreview />
      </div>
    </main>
  );
}

export default App;
