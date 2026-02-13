import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse=()=>{
    useNowPlayingMovies();
    usePopularMovies();
    const showGptSearch=useSelector((store)=> store.gpt.showGptSearch);
    return <div className="relative w-screen bg-black text-white">
        
        <Header/>
        {
            showGptSearch?<GptSearch/>:
            <><MainContainer/>
                <SecondaryContainer/>
            </>
        }
        
       
    </div>
};

export default Browse;