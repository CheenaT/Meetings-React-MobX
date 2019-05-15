import React from 'react';
import { observer } from "mobx-react";

let q = document.querySelector.bind(document);

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
{console.log(images)}
const Meetings = observer(({ appState }) => (
  <React.Fragment>
    <div className="header">
      <img className="header__gp-icon" src={images[45]} width="50" height="50" alt="" />
      <div className="header__text">Meetings</div>
      <button className="header__button-create-meeting" onClick={appState.toggleNewMeetWindowShow}>
        { appState.newMeetWindowShow ? 'cancel meet' : 'new meet' }
      </button>
    </div>
    <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
  </React.Fragment>
));

export default Meetings;
