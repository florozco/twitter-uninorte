import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/common/Nav";
import routes from "./lib/routes";
import UserProvider from "./contexts/userContext";
import "./App.css"
const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <h1>App</h1>
        <Nav />

        <div className="app">
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
          
        </div>
        
      </BrowserRouter>
    </main>
  );
};

export default App;
