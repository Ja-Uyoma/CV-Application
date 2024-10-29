import { Certificates, CertificatesPreview } from "./components/Certificates";
import { Education, EducationPreview } from "./components/Education";
import { Employment, EmploymentPreview } from "./components/Employment";
import { Interests, InterestsPreview } from "./components/Interests";
import {
  PersonalDetails,
  PersonalDetailsPreview,
} from "./components/PersonalDetails";
import {
  Qualifications,
  QualificationsPreview,
} from "./components/Qualifications";
import { References, ReferencesPreview } from "./components/References";
import { Skills, SkillsPreview } from "./components/Skills";

function App() {
  return (
    <main className="flex">
      <div className="flex flex-1 flex-col gap-1">
        <PersonalDetails />
        <hr />
        <Education />
        <hr />
        <Qualifications />
        <hr />
        <Interests />
        <hr />
        <References />
        <hr />
        <Skills />
        <hr />
        <Employment />
        <hr />
        <Certificates />
      </div>

      <div className="flex-1">
        <p className="text-center font-medium text-xl">Resume</p>
        <PersonalDetailsPreview />
        <EducationPreview />
        <QualificationsPreview />
        <InterestsPreview />
        <ReferencesPreview />
        <SkillsPreview />
        <EmploymentPreview />
        <CertificatesPreview />
      </div>
    </main>
  );
}

export default App;
