import { TextArea } from "./components/TextArea";
import { History } from "./components/History";
import { Certificates } from "./components/Certificates";
import { BasicInformation } from "./components/BasicInformation";

function App() {
  return (
    <main>
      <BasicInformation />
      <History formName={"Education"} />
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
      <History formName={"Work Experience"} />
      <Certificates />
    </main>
  );
}

export default App;
