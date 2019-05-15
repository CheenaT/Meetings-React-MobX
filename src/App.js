import { decorate, observable, action } from "mobx";

class App {
  timer = 0;
  isClicked = false;
  timeNow = new Date();
  isHiddenPopup = false;
  moreInfoPopup = false;
  newMeetWindowShow = false;

  constructor() {
    setInterval(() => {
      this.timer += 1;
      this.timeNow = new Date();
    }, 1000);
  }

  reset() {
    this.timer = 0;
  }

  toggleNewMeetWindowShow() {
    this.newMeetWindowShow = !this.newMeetWindowShow
  }
}

decorate(App, {
  timer: observable,
  isClicked: observable,
  timeNow: observable,
  isHiddenPopup: observable,
  moreInfoPopup: observable,
  newMeetWindowShow: observable,
  reset: action.bound,
  toggleNewMeetWindowShow: action.bound
})

export default App;
