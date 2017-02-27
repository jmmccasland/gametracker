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
    case 'GAME@UPDATE:TOGGLE_ATCAMPUS':
      return {
        ...state,
        games: state.games.map((game) => {
          if (game._id === action.id) {
            return { ...game, atCampus: !game.atCampus };
          }
          return game;
        }),
      };
    case 'GAME@REMOVE:COMPLETE':
      return {
        ...state,
        games: state.games.filter((game) => game._id !== action.id),
      };
    default:
      return state || {
        loading: false,
        showOnlyAt: null, // 'home', 'campus'
        games: []
      };
  }
}
