import { Link } from "react-router-dom";

export const Home = () => (
  <main>
    <h1>React Practice Series</h1>
    <ul>
      <li>
        <Link to="/useReducer-context">useReducer + useContext</Link>
      </li>
      <li>
        <Link to="/redux-toolkit">Redux-Toolkit</Link>
      </li>
      <li>
        <Link to="/zustand">Zustand</Link>
      </li>
      <li>
        <Link to="/api-integration">API Integration</Link>
      </li>
      <li>
        <Link to="/layout-system">Layout System</Link>
      </li>
      <li>
        <Link to="/performance-a11y">Performance a11y</Link>
      </li>
    </ul>
  </main>
);
