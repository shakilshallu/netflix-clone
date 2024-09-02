import "./card.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { TiThumbsUp } from "react-icons/ti";

import { addToWishlist } from "../../api/Movies";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, style, favMovies }) => {
	const isEqual = favMovies?.includes(movie?.id);
	console.log(isEqual);
	return (
		<div className={`single-card  ${style || ""} `}>
			<div className="card-img">
				<img
					src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
					alt="single movie card"
					className="test"
				/>
				<div className="card-content">
					<div className="icons">
						<div className="left-icons">
							<FaPlayCircle className="play-icon" />
							<FaHeart
								onClick={() => addToWishlist(movie.id)}
								fill={isEqual ? "red" : "white"}
								className={`heart-icon `}
							/>
							<TiThumbsUp className="likes"/>
						</div>
						
						<div className="rating">
							<div className="rating-value">
								<FaStar className="star-icon" />
								{movie.vote_average.toFixed(1)} /10
							</div>
						</div>
					</div>
					<h3 className="movie-title">{movie.title || movie.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;