export default function reducer(state, action) {
  switch (action.type) {
    case 'GAME@FIND_ALL:START':
      return {
        ...state,
        loading: true,
      };
    case 'GAME@FIND_ALL:COMPLETE':
      return {
        ...state,
        loading: false,
        games: action.data
      };
    default:
      return state || {
        loading: false,
        showOnlyAt: null, // 'home', 'campus'
        games: [],
      };
  }
}
