import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route path="example" element={<ExamplePage />} /> */}
          {/* <Route path="explorer" element={<ExplorerPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
