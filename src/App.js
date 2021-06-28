import React, { useState } from "react";
// import { LargeCard, Card, WideCard, TallCard } from "./components/Card";
import Card from "./components/Card";
const App = () => {
  const [drakMode, setDarkMode] = useState(false);
  return (
    <div className={`min-h-screen ${drakMode ? "dark" : ""}`}>
      <div className="flex flex-col h-full justify-between bg-yellow-50 dark:bg-gray-200">
        <header>
          <div className="px-4 py-2 h-12 bg-yellow-400 dark:bg-gray-400 flex justify-between">
            <h1 className=" font-semibold">The news App</h1>
            <button type="button" onClick={() => setDarkMode(!drakMode)}>
              toggle
            </button>
          </div>
          <div className="px-4 py-2 bg-yellow-300 dark:bg-gray-300 flex space-x-4">
            <div className="tools">sort</div>
            <div className="tools">latest</div>
            <div className="tools">somethin</div>
            <div className="tools">sss</div>
          </div>
        </header>
        <main className="h-full">
          <div
            className="grid gap-4 sm:gap-2 xl:gap-6 p-4 sm:p-2 xl:p-6
        grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6
      grid-flow-row-dense max-w-screen-2xl mx-auto"
          >
            <Card variant="large" />
            <Card variant="normal" />
            <Card variant="normal" />
            <Card variant="normal" />
            <Card variant="wide" />
            <Card variant="normal" />
            <Card variant="tall" />
            <Card variant="normal" />
            <Card variant="normal" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
        <footer>
          <div className="bg-yellow-400 dark:bg-gray-400 h-12 flex" />
        </footer>
      </div>
    </div>
  );
};

export default App;
