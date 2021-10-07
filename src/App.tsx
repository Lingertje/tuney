import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Artists } from "routes/Artists";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route path="/">
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
