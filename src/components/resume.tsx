import { Certificates } from "./certificates/certificates";
import { Education } from "./education/education";
import { Employment } from "./employment/employment";
import { Interests } from "./interests/interests";
import { PersonalDetails } from "./personal-details/personal-details";
import { Qualifications } from "./qualifications/qualifications";
import { References } from "./references/references";
import { Skills } from "./skills/skills";

function Divider() {
  return <hr className="w-11/12 mx-auto" />;
}

export function Resume() {
  return (
    <div className="flex flex-1 flex-col gap-1 bg-white">
      <PersonalDetails />
      <Divider />
      <Education />
      <Divider />
      <Qualifications />
      <Divider />
      <Interests />
      <Divider />
      <References />
      <Divider />
      <Skills />
      <Divider />
      <Employment />
      <Divider />
      <Certificates />
    </div>
  );
}
