import React from 'react';
import { observer } from "mobx-react";
import { meetingRooms, floorsWithMeetingRooms } from './constants.js';
import CreateNewMeetField from './components/Create-New-Meet-Window';
import FloorsWithMeetingRooms from './components/Floors-With-Meeting-Rooms';
import TimeBlocks from './components/Time-Blocks';
import Header from './components/Header';
import DatePicker from './components/Date-Picker';
import Dialog from '@material-ui/core/Dialog';

let q = document.querySelector.bind(document);

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
{console.log(images)}
const Meetings = observer(({ appState }) => (
  <React.Fragment>
    <Dialog open={false} >
      <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
    </Dialog>
    <Header appState={appState} image={images[45]} />
    <div className="main">
      { appState.newMeetWindowShow && <CreateNewMeetField images={images} appState={appState} />}
      <DatePicker appState={appState} leftArrow={images[43]} rightArrow={images[42]} />
      <FloorsWithMeetingRooms/>
      <div className="meeting-schedule">
        <div className="main__time-now">
          {appState.getTime().toTimeString().slice(0, 5)}
        </div>
        <div className="main__vertical-line" />
        <TimeBlocks/>

      </div>


    </div>
  </React.Fragment>
));

export default Meetings;
