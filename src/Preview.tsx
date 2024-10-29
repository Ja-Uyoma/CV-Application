import { CertificatesPreview } from "./components/Certificates";
import { EducationPreview } from "./components/education/education-preview";
import { EmploymentPreview } from "./components/Employment";
import { InterestsPreview } from "./components/interests/interests-preview";
import { PersonalDetailsPreview } from "./components/personal-details/personal-details-preview";
import { QualificationsPreview } from "./components/qualifications/qualifications-preview";
import { ReferencesPreview } from "./components/references/references-preview";
import { SkillsPreview } from "./components/skills/skills";

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
