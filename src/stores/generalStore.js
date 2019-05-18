import { decorate, observable, action } from 'mobx';

class GeneralStore {
  // timeBlocks = [];
  selectedTimeBlock = -1;
  newMeetWindowShown = false;
  selectedMeetingRoom = 'test';
  findingParticipant = '';
  timeBlocks = new Array(136);

  addMeet(id, people) {
    this.timeBlocks[id] = people;
  }

  findingParticipantChange(participant) {
    this.findingParticipant = participant;
  }

  setSelectedMeetingRoom(value) {
    this.selectedMeetingRoom = value;
  }

}

decorate(GeneralStore, {
  beginTime: observable,
  timeBlocks: observable,
  selectedTimeBlock: observable,
  newMeetWindowShown: observable,
  selectedMeetingRoom: observable,
  findingParticipant: observable,
  findingParticipantChange: action.bound,
  addMeet: action.bound,
  setSelectedMeetingRoom: action.bound,
})

export default new GeneralStore();
