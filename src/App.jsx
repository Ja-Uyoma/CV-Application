import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const EducationForm = () => {
  return (
    <form action="/" method="post">
      <div>
        <label htmlFor="education">Education</label>
        <input type="text" name="education" id="education" />
      </div>

      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" />
      </div>

      <div>
        <label htmlFor="start-date">Start Date</label>
        <input type="date" name="start-date" id="start-date" />
      </div>

      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="date" name="end-date" id="end-date" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
      </div>
    </form>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
