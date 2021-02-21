import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Users from "components/Users";
import Posts from "components/Posts";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
            <li>
              <Link to="/posts">Post</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <div>
              <h1>home</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
