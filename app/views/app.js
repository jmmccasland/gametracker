import store from '../store';

export default class AppView {
  constructor(el) {
    this.el = el;
    this.store = store;
  }

  created() {
    // Set up listen for state change and store in local storage
    this.store.subscribe(() => {
      localStorage.gameTracker = JSON.stringify(this.store.getState().games);
    });

    // Figure out old data
    this.store.dispatch({
      type: 'GAME@FIND_ALL:COMPLETE',
      data: JSON.parse(localStorage.gameTracker || '[]')
    });
    // Set up list view
    // Set up form view
  }

}
