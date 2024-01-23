import { TextArea } from "./components/TextArea";
import { HistoryForm } from "./components/HistoryForm";
import { Certificates } from "./components/Certificates";

function App() {
  return (
    <main>
      <HistoryForm formName={"Education"} />
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
      <HistoryForm formName={"Work Experience"} />
      <Certificates />
    </main>
  );
}

export default App;
