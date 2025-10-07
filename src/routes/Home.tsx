import { Link } from "react-router-dom";

export const Home = () => (
  <main>
    <h1>React Practice Series</h1>
    <ul>
      <li>
        <Link to="/useReducer-context">useReducer + useContext</Link>
      </li>
    </ul>
  </main>
);
