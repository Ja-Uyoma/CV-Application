import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Employment } from "./components/Employment";
import { Interests } from "./components/Interests";
import { PersonalDetails } from "./components/PersonalDetails";
import { Qualifications } from "./components/Qualifications";
import { References } from "./components/References";
import { Skills } from "./components/Skills";

export function Resume() {
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
