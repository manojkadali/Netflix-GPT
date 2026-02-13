import { useRef } from "react";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants";

const GptSearchBar=()=>{
    const searchText=useRef(null);
    const searchMovieTMDB=async (movie)=>{
        const data=await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
    }
    //make an API call to GPT AI to get movie result
    const handleGptSearchClick=async()=>{
        console.log(searchText.current.value);
        const getQuery="Act as a movie Recommendation system and suggest some moives for the query: "+ searchText.current.value+". only give me names og 5 mvies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
        model: 'gpt-5.2',
        messages: [
            { role: 'user', content:getQuery },
        ],
        });
        if(!gptResults.choices){
            console.log("gptChoices are not preesnt ");
            // error handling if gptchoices is not present
        }
        const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
        // for each moive i will search TMDB API
        const PromiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));//
        //[prom1, promise2,promise3,promise4,promise5]
        const tmdbResults=Promise.all(PromiseArray);
        console.log(tmdbResults);

        
    }
    

    return <div className="bg-black">
       
        <form className="pt-[20%] " onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}type= "text" className="p-4 m-4 " placeholder="What would you like to watch Today ?" />
            <button className="py-2 px-4 bg-red-600 text-white rounded-lg"
                onClick={handleGptSearchClick}>Search</button>
        
        </form>
    </div>
}

export default GptSearchBar;