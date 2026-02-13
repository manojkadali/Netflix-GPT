import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { toggleGptSearchView } from "../utils/gptSlice";

const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleGptSearchClick=()=>{
            dispatch (toggleGptSearchView());   
            console.log("clicked");        
        }

    const user=useSelector((store)=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
         
    }
    
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{//any change happened it will check fro auth
            if(user){
                const {uid,email,displayName}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName})); 
                navigate("/browse");  //routing
            }else{//action for sign out
                dispatch(removeUser());
                navigate("/");
            }
        });

       

        //unsubscribe when onAuthstateChanged unmounts()
         return ()=>unsubscribe();
    },[]);
    return <div className="absolute flex justify-between w-screen px-8 py-2 bg-linear-to-b from-black z-50">
        <img className="w-44 "
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="logo"/>
        
        {user &&(
        
            
        <div className="flex p-2">
             <button className=" py-2 px-4 m-2 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleGptSearchClick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   {showGptSearch ? "HomePage" : "GPT Suggestion"}  </span>
</button>
                {/* <button className=" bg-red-300 text-black">GPT Suggest</button> */}
            
            <img className="w-12 h-12 m-2 rounded-l"
            alt="usericon" src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"/>
           
            <button
                    onClick={handleSignOut}
                    className="h-12 m-2
                        px-4 py-2
                        text-sm font-semibold
                        text-white
                        bg-red-600
                        rounded-md
                        hover:bg-red-700
                        active:bg-red-800
                        transition-colors
                        focus:outline-none
                        focus:ring-2 focus:ring-red-400 focus:ring-offset-2
                    "
                    >
                    Sign out
                    </button>

        </div>
        )}
        
    </div>
};

export default Header;