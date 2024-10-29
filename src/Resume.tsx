import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Employment } from "./components/Employment";
import { Interests } from "./components/Interests";
import { PersonalDetails } from "./components/personal-details/personal-details";
import { Qualifications } from "./components/Qualifications";
import { References } from "./components/References";
import { Skills } from "./components/Skills";

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
