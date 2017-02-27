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
    case 'GAME@CREATE:START':
      return {
        ...state,
        loading: true
      };
    case 'GAME@CREATE:COMPLETE':
      return {
        ...state,
        games: [action.data, ...state.games],
        loading: false
      };
    default:
      return state || {
        loading: false,
        showOnlyAt: null, // 'home', 'campus'
        games: []
      };
  }
}
