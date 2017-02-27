export default class Form {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // What to do when the form submits
    this.el.addEventListener('submit', (ev) => {
      // Make sure the page doesn't reload
      ev.preventDefault();

      // Get form values
      const data = {
        name: this.el.querySelector('.create-form__name').value,
        minPlayers: this.el.querySelector('.create-form__min-players').value,
        maxPlayers: this.el.querySelector('.create-form__max-players').value,
        _id: new Date(),
      };

      // Tell redux about the changes it should make
      this.store.dispatch({ type: 'GAME@CREATE:COMPLETE', data });

      // Clear form
      this.el.querySelector('.create-form__name').value = '';
      this.el.querySelector('.create-form__min-players').value = '';
      this.el.querySelector('.create-form__max-players').value = '';
    });
  }
}
