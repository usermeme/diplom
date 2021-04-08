import * as React from "react";
import { Layout as RALayout } from "react-admin";

const Layout = (props) => (
  <RALayout
    {...props}
    logout={false}
  />
);

export default Layout;
