import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import ResponsiveDrawer from "./drawer";

const Layout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveDrawer />
    </React.Fragment>
  );
};

export default Layout;
