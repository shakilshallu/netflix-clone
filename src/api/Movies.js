import axios from "../libs/axios";
import requests from "../libs/request";
export const getFetchTrending = async () => {
	try {
		const { data } = await axios.get(requests.fetchTrending);
		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchNetflixOriginals = async () => {
	try {
		const { data } = await axios.get(requests.fetchNetflixOriginals);
		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchTopRated = async () => {
	try {
		const { data } = await axios.get(requests.fetchTopRated);
		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchActionMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchActionMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchComedyMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchComedyMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchHorrorMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchHorrorMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchRomanceMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchRomanceMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchAdventureMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchAdventureMovies);
		console.log(data);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchWarMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchWarMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchScienceFictionMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchScienceFictionMovies);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getFetchDocumentaries = async () => {
	try {
		const { data } = await axios.get(requests.fetchDocumentaries);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};
export const getSearchUrl = async () => {
	try {
		const { data } = await axios.get(requests.fetchNetflixOriginals);

		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
		return null;
	}
};

export const getPageData = async () => {
	const netflixOriginals = await getFetchNetflixOriginals();
	const trendingNow = await getFetchTrending();
	const topRated = await getFetchTopRated();
	const actionMovies = await getFetchActionMovies();
	const comedyMoives = await getFetchComedyMovies();
	const horrorMovies = await getFetchHorrorMovies();
	const romanceMovies = await getFetchRomanceMovies();
	const warMovies = await getFetchWarMovies();
	const scienceFictionMovies = await getFetchScienceFictionMovies();
	const documentaries = await getFetchDocumentaries();
	return {
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMoives,
		horrorMovies,
		romanceMovies,
		warMovies,
		scienceFictionMovies,
		documentaries,
	};
};
export const addToWishlist = async (media_id) => {
	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
		},
	};

	const { data } = await axios.post(
		`account/${process.env.REACT_APP_ACCOUNT_ID}/favorite`,
		{
			media_type: "movie",
			media_id,
			favorite: true,
		},
		options
	);
	return data;
};

export const getWishlist = async () => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
		},
	};
	const response = await axios.get(
		`account/${process.env.REACT_APP_ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
		options
	);
	return response.data;
};

// export const addToWishlist = async (movie) => {
// 	try {
// 	  console.log('Sending request to add movie:', movie);
	  
// 	  const response = await axios.post(`/api/wishlist`, movie, {
// 		headers: {
// 		  'Content-Type': 'application/json',
// 		  'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
// 		},
// 	  });
  
// 	  console.log('Received response:', response);
  
// 	  if (!response.data.success) {
// 		throw new Error(`Failed to add movie to wishlist`);
// 	  }
  
// 	  return response.data;
// 	} catch (error) {
// 	  console.error('Error adding to wishlist:', error.message);
// 	  throw error;
// 	}
// };
  
// export const getWishlist = async () => {
// 	const options = {
// 		headers: {
// 			accept: "application/json",
// 			Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
// 		},
// 	};
// 	const response = await axios.get(
// 		`account/${process.env.REACT_APP_ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
// 		options
// 	);
// 	return response.data;
// };

const getOptions = {
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
	},
};
export const login = async (body) => {
	try {
		const { data } = await axios.get("authentication/token/new", getOptions);
		const { request_token } = data;
		const { data: response } = await axios.post(
			"authentication/token/validate_with_login",
			{ ...body, request_token },
			getOptions
		);
		if (response?.success) {
			localStorage.setItem("user", true);
		}
		return response?.success ?? false;
	} catch (error) {
		console.log({ error: error.message });
	}
};