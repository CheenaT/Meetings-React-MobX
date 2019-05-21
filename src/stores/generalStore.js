import { decorate, observable, action } from 'mobx';

class GeneralStore {
  // timeBlocks = [];
  selectedTimeBlock = -1;
  newMeetWindowShown = false;
  selectedMeetingRoom = 'Pavlov';
  findingParticipant = '';
  timeBlocks = new Array(136);

  constructor() {
    this.addMeet(44, {
      "Darth Vader": {name: "Darth Vader", image: 0},
      "Genghis Khan": {name: "Genghis Khan", image: 1}
    });

    this.addMeet(70, {
      "Genghis Khan": {name: "Genghis Khan", image: 1}
    });

    this.addMeet(90, {
      "Neo": {name: "Neo", image: 4}
    });
  }

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
