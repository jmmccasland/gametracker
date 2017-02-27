export default function reducer(state, action) {
  return state || {
    loading: false,
    showOnlyAt: null, // 'home', 'campus'
    games: [],
  };
}
