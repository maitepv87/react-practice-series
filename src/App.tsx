import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { UseReducerDemo } from "./routes/UseReducerDemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useReducer-context" element={<UseReducerDemo />} />
    </Routes>
  );
}

export default App;
