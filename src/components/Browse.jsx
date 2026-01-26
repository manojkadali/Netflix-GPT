import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";


const Browse=()=>{
    useNowPlayingMovies();
    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
        <Header/>
       <MainContainer/>
    </div>
};

export default Browse;