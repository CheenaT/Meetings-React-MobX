import { decorate, observable, action } from 'mobx';

class NewMeetStore {
  beginTime = new Date(Math.ceil(new Date().getTime() / (60*1000*5) ) * 60*1000*5);
  endTime = new Date(Math.ceil(new Date(new Date().setMinutes(new Date().getMinutes() + 30)).getTime() / (60*1000*5) ) * 60*1000*5);
  startDate = new Date();
  participantsListIsShown = false;
  possibleTimeShown = false;
  possibleEndTimeShown = false;
  meetingRoomIsHover = false;
  recommendedMeetingRoom = [];
  people = {};
  timeInterval = null;

  setPossibleTimeShown(value) {
    this.possibleTimeShown = value;
  }

  setPossibleEndTimeShown(value) {
    this.possibleEndTimeShown = value;
  }

  setParticipantsListIsShown(value) {
    this.participantsListIsShown = value;
  }

  setMeetingRoomIsHover(value) {
    this.meetingRoomIsHover = value;
  }

  setRecommendedMeetingRoom(value) {
    this.recommendedMeetingRoom = value;
  }

  setBeginTime(e) {
    this.beginTime = e.target.value;
  }

  setEndTime(e) {
    this.endTime = e.target.value;
  }

  initTime() {
    if (!this.timeInterval) {
      this.beginTime = new Date(Math.ceil(new Date().getTime() / (60*1000*5) ) * 60*1000*5);
      this.timeInterval = setInterval( () => this.beginTime = new Date(Math.ceil(new Date().getTime() / (60*1000*5) ) * 60*1000*5), 5 * 60 * 1000 );
    }
  }

  dispose() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      this.timeInterval = null;
    }
  }

  setDatePickerDate(date) {
    this.startDate = date;
  }

}

decorate(NewMeetStore, {
  beginTime: observable,
  endTime: observable,
  startDate: observable,
  participantsListIsShown: observable,
  possibleTimeShown: observable,
  possibleEndTimeShown: observable,
  meetingRoomIsHover: observable,
  recommendedMeetingRoom: observable,
  people: observable,
  setPossibleTimeShown: action.bound,
  setPossibleEndTimeShown: action.bound,
  setDatePickerDate: action.bound,
  setParticipantsListIsShown: action.bound,
  setMeetingRoomIsHover: action.bound,
  setRecommendedMeetingRoom: action.bound,
  setBeginTime: action.bound,
  setEndTime: action.bound,
  initTime: action,
  dispose: action
})

export default new NewMeetStore();
