import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/common/Nav";
import routes from "./lib/routes";

//borrable

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Switch>
          {restricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
