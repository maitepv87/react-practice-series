import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  UseAPIDemo,
  UseReducerDemo,
  UseReduxDemo,
  UseZustandDemo,
} from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useReducer-context" element={<UseReducerDemo />} />
      <Route path="/redux-toolkit" element={<UseReduxDemo />} />
      <Route path="/zustand" element={<UseZustandDemo />} />
      <Route path="/api-integration" element={<UseAPIDemo />} />
    </Routes>
  );
}

export default App;
