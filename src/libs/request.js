const REACT_APP_API_KEY='47a54afabcd47abc6ba8d8ae2772df77'

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,

  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,

  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,

  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,

  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,

  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,

  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,

  fetchAdventureMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=12`,

  fetchWarMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10752`,

  fetchScienceFictionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=878`,

  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99`,

  searchUrl: `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=`
};

export default requests;