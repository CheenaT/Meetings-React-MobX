import React from 'react';
import { inject, observer } from "mobx-react";
import SetTime from '../Set-Time';
import Participants from '../Participants';
import DatePicker from "react-datepicker";
import InlineDatePicker from '../Inline-Date-Picker';
import MeetingRoom from '../Meeting-Room';
import InvitedParticipants from '../Invited-Participants';
import ParticipantsListSelect from '../React-Select-Participants-List'
import Button from '../Button';

let qa = document.querySelectorAll.bind(document);

const CreateNewMeetField = inject('NewMeetStore', 'GeneralStore')(observer(
  class CreateNewMeetField extends React.Component {
    componentDidMount() {
      this.props.NewMeetStore.initTime();
      qa('.MuiInput-input')[0].style.height = '25px';
      qa('.MuiFormControl-root')[0].style.position = 'absolute';
    }
    componentWillUnmount() {
      this.props.NewMeetStore.dispose();
    }
    render() {
      const { images, appState } = this.props;
      const { possibleTimeShown, startDate, setDatePickerDate } = this.props.NewMeetStore;
      const { setSelectedMeetingRoom } = this.props.GeneralStore,
              buttonBackProps = { bg: '#0859A1', position: 'absolute', top: '605px', left: '552px', width: '72px', height: '38px', zIndex: '1000' },
              buttonCreateProps = { bg: '#0859A1', position: 'absolute', top: '605px', left: '660px', width: '110px', height: '38px', zIndex: '1000' };
      return (
        <div className="main__new-meet-create"> { console.log( ' debug GeneralStore : ', this.props.GeneralStore.timeBlocks[44] ) }
          <div className="main__padding-left">
            <InlineDatePicker />
            <SetTime period={'Begin'} />
            <div className="new-meet-create__hyphen-between-times">—</div>
            <SetTime period={'End'} />
            <MeetingRoom buttomArrowIcon={images[41]} />
            <InvitedParticipants images={images} testAvatar={images[0]} />
            <Button
              style={buttonBackProps}
              onClickHandler={() => {appState.toggleNewMeetWindowShow(); setSelectedMeetingRoom('') } }
            >
              {'Back'}
            </Button>
            <Button style={buttonCreateProps}>
              {'Create'}
            </Button>
            <ParticipantsListSelect NewMeetStore={this.props.NewMeetStore} />



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
          </div>
        </div>
      )
    }
  }
)
)

export default CreateNewMeetField;
