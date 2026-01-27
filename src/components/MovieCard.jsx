import { IMG_CDN } from "../utils/constants";


const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[160px] md:min-w-[200px] transform transition duration-300 hover:scale-110">
      <img
        className="rounded-lg"
        alt="movie card"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};
export default MovieCard;