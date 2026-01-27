import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    
    
    if(!movies) return;
    const mainMovie=movies[0];
// console.log("this is mainmovive" +mainMovie);
    const {original_title,overview,id}=mainMovie;
// console.log(id);
    return(
    <div className="relative w-screen h-screen overflow-hidden">

      
      <VideoBackground movieId={id} />

      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

     
      <VideoTitle title={original_title} overview={overview} />

    </div>
    );
}

export default MainContainer;