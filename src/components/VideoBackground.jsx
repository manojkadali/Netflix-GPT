import { useSelector } from "react-redux";

const Videobackground=({title,overview})=>{

    return(<div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div>
            <button>Play</button>
            <button>MoreInfo</button>
        </div>
    </div>
    );
}

export default VideoBackground;