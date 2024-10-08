import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Employment } from "./components/Employment";
import { Pane } from "./components/Pane";
import { PersonalDetails } from "./components/PersonalDetails";

function App() {
  return (
    <main className="bg-primary flex">
      <div className="w-1/2 flex flex-col gap-2">
        <PersonalDetails />
        <Education />
        <Pane name={"Qualifications"} />
        <Pane name={"Interests"} />
        <Pane name={"References"} />
        <Pane name={"Skills"} />
        <Employment />
        <Certificates />
      </div>

      <div>
        <p>View Your Resume!</p>
      </div>
    </main>
  );
}

export default App;
