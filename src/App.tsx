import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, UseReducerDemo, UseReduxDemo } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useReducer-context" element={<UseReducerDemo />} />
      <Route path="/redux-toolkit" element={<UseReduxDemo />} />
    </Routes>
  );
}

export default App;
