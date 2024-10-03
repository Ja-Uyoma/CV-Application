import { ResumeBuilder } from "./components/ResumeBuilder";
import { ResumeViewer } from "./components/ResumeViewer";

function App() {
  return (
    <main className="bg-primary flex">
      <ResumeBuilder />
      <ResumeViewer />
    </main>
  );
}

export default App;
