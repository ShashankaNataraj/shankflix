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
    case "setExpandedMovie":
      let { breaksAfterEvery } = action;
      return {
        ...state,
        expandedMovie: action.expandedMovie,
        breaksAfterEvery
      };
    case "setWindowSize":
      let { height, width } = action;
      console.log(`caught dispatch:${height}, ${width}`);
      return {
        ...state,
        windowHeight: height,
        windowWidth: width
      };
    default:
      return state;
  }
};
export default reducer;
