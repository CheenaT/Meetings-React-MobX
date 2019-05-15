import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Meetings from "./meetings.js";
import "./style.scss";

render(
  <div>
    <Meetings appState={new App()} />
    <DevTools />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
