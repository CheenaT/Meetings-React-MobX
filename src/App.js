import { createAtom, decorate, observable, action } from "mobx";

class App {
  timer = 0;
  isClicked = false;
  timeNow = new Date();
  isHiddenPopup = false;
  moreInfoPopup = false;
  newMeetWindowShow = false;

  atom;
  intervalHandler = null;
  currentDateTime;

  constructor() {
    setInterval(() => {
      // this.timer += 1;
      // this.timeNow = new Date();
    }, 1000);

    this.atom =    createAtom(
        // first param: a name for this atom, for debugging purposes
        "Clock",
        // second (optional) parameter: callback for when this atom transitions from unobserved to observed.
        () => this.startTicking(),
        // third (optional) parameter: callback for when this atom transitions from observed to unobserved
        // note that the same atom transitions multiple times between these two states
        () => this.stopTicking()
    );
  }

  reset() {
    this.timer = 0;
  }

  toggleNewMeetWindowShow() {
    this.newMeetWindowShow = !this.newMeetWindowShow
  }

  getTime() {
        // let MobX know this observable data source has been used
        // reportObserved will return true if the atom is currently being observed
        // by some reaction.
        // reportObserved will also trigger the onBecomeObserved event handler (startTicking) if needed
        if (this.atom.reportObserved()) {
            return this.currentDateTime;
        } else {
            // apparently getTime was called but not while a reaction is running.
            // So, nobody depends on this value, hence the onBecomeObserved handler (startTicking) won't be fired
            // Depending on the nature of your atom
            // it might behave differently in such circumstances
            // (like throwing an error, returning a default value etc)
            return new Date();
        }
    }

    tick() {
        this.currentDateTime = new Date();
        // let MobX know that this data source has changed
        this.atom.reportChanged();
    }

    startTicking() {
        this.tick(); // initial tick
        // this.intervalHandler = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    stopTicking() {
        clearInterval(this.intervalHandler);
        this.intervalHandler = null;
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
