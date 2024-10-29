import { Certificates } from "./components/Certificates";
import { Education } from "./components/education/education";
import { Employment } from "./components/Employment";
import { Interests } from "./components/interests/interests";
import { PersonalDetails } from "./components/personal-details/personal-details";
import { Qualifications } from "./components/qualifications/qualifications";
import { References } from "./components/references/references";
import { Skills } from "./components/skills/skills";

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
