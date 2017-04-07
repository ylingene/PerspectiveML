import { HashRouter, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import Upload from "./Upload";
import UploadReturn from "./UploadReturn";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={ Layout } />
      <Route path="/upload" component={ Upload } />
      <Route path="/upload/:focalParam" component={ UploadReturn } />
    </div>
  </HashRouter>
  , document.getElementById('doc'));
