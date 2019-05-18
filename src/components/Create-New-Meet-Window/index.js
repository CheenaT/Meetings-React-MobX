import React from 'react';
import { inject, observer } from "mobx-react";
import SetTime from '../Set-Time';
import Participants from '../Participants';
import DatePicker from "react-datepicker";
import InlineDatePicker from '../Inline-Date-Picker';
import MeetingRoom from '../Meeting-Room';

let qa = document.querySelectorAll.bind(document);

const CreateNewMeetField = inject('NewMeetStore', 'GeneralStore')(observer(
  class CreateNewMeetField extends React.Component {
    componentDidMount() {
      this.props.NewMeetStore.initTime();

      this.props.GeneralStore.addMeet(44, {
        "Darth Vader": {name: "Darth Vader", image: 0},
        "Genghis Khan": {name: "Genghis Khan", image: 1}
      });

      this.props.GeneralStore.addMeet(70, {
        "Genghis Khan": {name: "Genghis Khan", image: 1}
      });

      this.props.GeneralStore.addMeet(90, {
        "Neo": {name: "Neo", image: 4}
      });

      qa('.MuiInput-input')[0].style.height = '25px';

      qa('.MuiFormControl-root')[0].style.position = 'absolute';

    }
    componentWillUnmount() {
      this.props.NewMeetStore.dispose();
    }

    render() {
      const { images, appState } = this.props;
      const { possibleTimeShown, startDate, setDatePickerDate } = this.props.NewMeetStore;
      return (
        <div className="main__new-meet-create"> { console.log( ' debug GeneralStore : ', this.props.GeneralStore.timeBlocks[44] ) }
          <img onClick={appState.toggleNewMeetWindowShow} src={images[44]} alt="" className="new-meet-create__circle-icon-with-close"/>
          <div className="new-meet-create__text">New meet</div>
          <label htmlFor="meet-title" className="new-meet-create__label-theme">
            Theme
          </label>
          <input
            id="meet-title"
            type="text"
            className="new-meet-create__meet-title"
            placeholder="What are you going to talk about?"
          />


          <InlineDatePicker />

          <SetTime period={'Begin'} />
          <div className="new-meet-create__hyphen-between-times">—</div>
          <SetTime period={'End'} />

          <Participants images={images} />

          <MeetingRoom buttomArrowIcon={images[41]} />

        </div>
      )
    }
  }
)
)

export default CreateNewMeetField;
