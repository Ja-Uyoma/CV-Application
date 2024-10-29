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
      <Resume />
      <Preview />
    </main>
  );
}

function Resume() {
  return (
    <div className="flex flex-1 flex-col gap-1 bg-white">
      <PersonalDetails />
      <hr className="w-11/12 mx-auto" />
      <Education />
      <hr className="w-11/12 mx-auto" />
      <Qualifications />
      <hr className="w-11/12 mx-auto" />
      <Interests />
      <hr className="w-11/12 mx-auto" />
      <References />
      <hr className="w-11/12 mx-auto" />
      <Skills />
      <hr className="w-11/12 mx-auto" />
      <Employment />
      <hr className="w-11/12 mx-auto" />
      <Certificates />
    </div>
  );
}

function Preview() {
  return (
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
  );
}

export default App;
