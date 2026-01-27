
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMoiveTrailer";



const VideoBackground = (movieId) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
//  console.log(trailerVideo);

  if (!trailerVideo) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <iframe
        className="w-full h-full scale-125"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo.key
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;

