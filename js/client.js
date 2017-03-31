import BodyParser from "body-parser";
import { HashRouter, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import Second from "./Second";
import SecondReturn from "./SecondReturn";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={ Layout } />
      <Route path="/second" component={ Second } />
      <Route path="/second/:focalParam" component={ SecondReturn } />
    </div>
  </HashRouter>
  , document.getElementById('doc'));
