import { TextArea } from "./components/TextArea";
import { History } from "./components/History";
import { Certificates } from "./components/Certificates";

function App() {
  return (
    <main>
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
