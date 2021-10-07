import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Artists } from "routes/Artists";
import { Homepage } from "routes/Homepage";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
