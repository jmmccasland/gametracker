import store from '../store';
import FormView from './form';
import ListView from './list';

export default class AppView {
  constructor(el) {
    this.el = el;
    this.store = store;
    this.formView = new FormView(el.querySelector('.create-form'), this.store);
    this.listView = new ListView(el.querySelector('.game-list'), this.store);
  }

  created() {
    // Set up listen for state change and store in local storage
    this.store.subscribe(() => {
      localStorage.gameTracker = JSON.stringify(this.store.getState().games);
    });

    // Mount form view
    this.formView.mounted();

    // Set up list view
    this.listView.mounted();

    // Figure out old data
    this.store.dispatch({
      type: 'GAME@FIND_ALL:COMPLETE',
      data: JSON.parse(localStorage.gameTracker || '[]')
    });
  }

}
