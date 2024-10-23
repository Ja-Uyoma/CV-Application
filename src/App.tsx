import { useState } from "react";
import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Employment } from "./components/Employment";
import { Pane } from "./components/Pane";
import {
  PersonalDetails,
  PersonalDetailsPreview,
} from "./components/PersonalDetails";
import { PersonalDetailsData } from "./types/PersonalDetails";

function App() {
  const [details, setDetails] = useState<PersonalDetailsData>({
    givenName: "",
    familyName: "",
    headline: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    postCode: "",
    city: "",
  });

  return (
    <main className="flex">
      <div className="flex flex-1 flex-col gap-1">
        <PersonalDetails setDetails={setDetails} />
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
      </div>
    </main>
  );
}

export default App;
