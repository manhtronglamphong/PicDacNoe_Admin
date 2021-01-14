import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile/profile";
import Ranking from "./pages/Ranking/ranking";
import History from "./pages/History/history";
import HisList from "./pages/HistoryList/HisList"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/ranking" exact component={Ranking} />
          <Route path="/history/:id" exact component={History} />
          <Route exact path="/listhistory" exact component={HisList}/>
          <Route exact path="/:email" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
