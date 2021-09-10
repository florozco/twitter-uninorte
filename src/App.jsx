import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/common/Nav";
import routes from "./lib/routes";
import UserProvider from "./contexts/userContext";

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <h1>App</h1>
        <Nav />
        <UserProvider>
          <Switch>
            {restricted.map(({ path, component }) => (
              <Route exact path={path} component={component} />
            ))}
            {unrestricted.map(({ path, component }) => (
              <Route exact path={path} component={component} />
            ))}
          </Switch>
        </UserProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
