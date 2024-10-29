import { CertificatesPreview } from "./components/Certificates";
import { EducationPreview } from "./components/Education";
import { EmploymentPreview } from "./components/Employment";
import { InterestsPreview } from "./components/Interests";
import { PersonalDetailsPreview } from "./components/personal-details/personal-details";
import { QualificationsPreview } from "./components/Qualifications";
import { ReferencesPreview } from "./components/References";
import { SkillsPreview } from "./components/Skills";

export function Preview() {
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
