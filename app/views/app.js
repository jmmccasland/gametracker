import store from '../store';
import FormView from './form';

export default class AppView {
  constructor(el) {
    this.el = el;
    this.store = store;
    this.formView = new FormView(el.querySelector('.create-form'), this.store);
  }

  created() {
    // Set up listen for state change and store in local storage
    this.store.subscribe(() => {
      localStorage.gameTracker = JSON.stringify(this.store.getState().games);
    });

    // Set up list view
    // Mount form view
    this.formView.mounted();


    // Figure out old data
    this.store.dispatch({
      type: 'GAME@FIND_ALL:COMPLETE',
      data: JSON.parse(localStorage.gameTracker || '[]')
    });
  }

}
