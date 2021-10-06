import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Artists } from "routes/Artists";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/">
            <h1>Homepage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
