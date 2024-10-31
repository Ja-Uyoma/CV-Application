import { ChangeEvent, useEffect, useState } from "react";

import { Preview } from "./components/preview";
import { Resume } from "./components/resume";

function App() {
  const [title, setTitle] = useState("");
  const placeholder = "Untitled resume";
  const length = title.length > 0 ? title.length : placeholder.length;

  useEffect(() => {
    if (title.length > 0) {
      document.title = title;
    }
  }, [title]);

  return (
    <>
      <header className="text-center py-5 text-white font-medium bg-gray-900">
        <h1>
          <label className="block w-full">
            <input
              type="text"
              name="page-title"
              placeholder="Untitled resume"
              className="bg-gray-900 p-0 border-0 size-max focus:ring-0 focus:border-b-2 focus:text-slate-400 focus:border-blue-300"
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
