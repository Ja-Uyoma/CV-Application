import { TextArea } from "./components/TextArea";
import { HistoryForm } from "./components/HistoryForm";

function App() {
  return (
    <main>
      <HistoryForm formName={"Education"} />
      <TextArea sectionName={"Qualifications"} />
      <TextArea sectionName={"Interests"} />
      <TextArea sectionName={"References"} />
      <TextArea sectionName={"Skills"} />
      <HistoryForm formName={"Work Experience"} />
    </main>
  );
}

export default App;
