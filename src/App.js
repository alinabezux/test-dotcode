import React from 'react';
import { Route, Routes, } from "react-router-dom";

import MainLayout from "./components/MainLayout";


const Task1 = React.lazy(() => import('./components/task1/Task1'));
const Task2 = React.lazy(() => import('./components/task2/Task2'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
