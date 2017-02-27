import reducer from '../app/reducer';

module('reducer', () => {
  test('it has a default state', (assert) => {
    const defaultState = {
      loading: false,
      showOnlyAt: null, // 'home', 'campus'
      games: [],
    };

    assert.deepEqual(reducer(null, {}), defaultState, 'Returns the default state');
  });
});
