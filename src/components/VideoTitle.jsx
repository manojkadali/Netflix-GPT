
import { useSelector } from "react-redux";

const VideoTitle=({title,overview})=>{

   return (
    <div className="absolute bottom-1/4 left-12 z-20 text-white max-w-xl">
      <h1 className="text-5xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-lg mb-6 line-clamp-3">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3 text-lg rounded hover:bg-opacity-80">
          Play
        </button>

        <button className="bg-gray-500/70 text-white px-8 py-3 text-lg rounded hover:bg-gray-500">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;