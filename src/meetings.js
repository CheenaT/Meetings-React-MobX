import React from 'react';
import { observer } from "mobx-react";
import { meetingRooms, floorsWithMeetingRooms } from './constants.js';
import CreateNewMeetField from './components/Create-New-Meet-Window';
import FloorsWithMeetingRooms from './components/Floors-With-Meeting-Rooms';

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
    <div className="main">
      { appState.newMeetWindowShow && <CreateNewMeetField />}
      <div className="main__date-picker">
        <div className="date-picker__date-today">
          <img className="date-picker__arrows" src={images[43]} alt="" />
          <span>
            {appState.timeNow.getDate() +
              " " +
              appState.timeNow
                .toDateString()
                .split(" ")[1]
                .toLowerCase()}{" "}
            • Today
          </span>
          <img className="date-picker__arrows" src={images[42]} alt="" />
        </div>
        <div className="date-picker__hours">
          {Array.apply(null, { length: 16 }).map((el, i) => (
            <span key={i + 8} className={`date-picker__hour hour${i}`}>
              {i + 8}
            </span>
          ))}
        </div>
      </div>
      <FloorsWithMeetingRooms/>
      


    </div>
  </React.Fragment>
));

export default Meetings;
