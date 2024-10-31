import { ChangeEvent, useEffect, useState } from "react";

import { Preview } from "./components/preview";
import { Resume } from "./components/resume";

function App() {
  const [title, setTitle] = useState("Untitled resume");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <header className="text-center py-5 text-white font-medium bg-gray-900">
        <h1>
          <label>
            <input
              type="text"
              placeholder="Untitled resume"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </label>
        </h1>
      </header>
      <main className="flex">
        <Resume />
        <Preview />
      </main>
    </>
  );
}

export default App;
