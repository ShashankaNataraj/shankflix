const initialState = {
  isLoading: false,
  movies: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case "toggleIsLoading":
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case "setMovies":
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
};

export default { initialState, reducer };
