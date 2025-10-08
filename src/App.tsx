import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  UseReducerDemo,
  UseReduxDemo,
  UseZustandDemo,
  // UseAiDemo,
} from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useReducer-context" element={<UseReducerDemo />} />
      <Route path="/redux-toolkit" element={<UseReduxDemo />} />
      <Route path="/zustand" element={<UseZustandDemo />} />
      {/* <Route path="/ai-integration" element={<UseAiDemo />} /> */}
    </Routes>
  );
}

export default App;
