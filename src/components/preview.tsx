import { CertificatesPreview } from "./certificates/certificates-preview";
import { EducationPreview } from "./education/education-preview";
import { EmploymentPreview } from "./employment/employment-preview";
import { InterestsPreview } from "./interests/interests-preview";
import { PersonalDetailsPreview } from "./personal-details/personal-details-preview";
import { QualificationsPreview } from "./qualifications/qualifications-preview";
import { ReferencesPreview } from "./references/references-preview";
import { SkillsPreview } from "./skills/skills-preview";

export function Preview() {
  return (
    <div className="flex-1 bg-white">
      <p className="text-center font-medium text-4xl uppercase text-black py-4">
        Resume
      </p>
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
