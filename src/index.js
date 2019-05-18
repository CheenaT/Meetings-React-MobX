import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Meetings from "./meetings.js";
import "./style.scss";
import { Provider } from 'mobx-react';

import NewMeetStore from './stores/newMeetStore.js';
import GeneralStore from './stores/generalStore.js';

const stores = {
  NewMeetStore,
  GeneralStore
};

render(
  <Provider {...stores}>
    <div>
      <Meetings appState={new App()} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
