import * as React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { region, Dashboard, Layout } from "../features";

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("Access-Control-Expose-Headers", "Content-Range");
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, fetchJson);

const App = () => (
  <Admin
    loginPage={false}
    authProvider={false}
    dashboard={Dashboard}
    layout={Layout}
    dataProvider={dataProvider}
  >
    <Resource {...region} />
  </Admin>
);

export default App;
