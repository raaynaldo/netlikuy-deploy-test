import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
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
            <div>post</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
