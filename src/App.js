import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { User } from "./pages/User/User";
import { ReposSearch } from "./pages/ReposSearch/ReposSearch";
import { UserSearch } from "./pages/UserSearch/UserSearch";
import { Repos } from "./pages/Repos/Repos";
import { GitHubState } from "./context/GitHubState";

function App() {
  return (
    <GitHubState>
      <Router>
        <div className="app">
          <Navbar />
          <div className="app__container">
            <Switch>
              <Route exact path="/" component={UserSearch} />
              <Route path="/user/:login" component={User} />
              <Route path="/searchrepos" component={ReposSearch} />
              <Route path="/repos/:owner/:repo" component={Repos} />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
}

export default App;
