import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Layout from "./components/layout";

import history from "./utilities/history";
import routes from "./utilities/routes";
import store from "./utilities/store";

const App = () => {
  // Checks OS preference for theme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#9e9e9e",
            light: "#cfcfcf",
            dark: "#707070",
          },
          secondary: {
            main: "#e57373",
            light: "#ffa4a2",
            dark: "#af4448",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <React.StrictMode>
      <BrowserRouter history={history}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/" component={Layout} />
              {routes.map((route) => {
                return <Route path={route.path} component={route.component} />;
              })}
            </Switch>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
