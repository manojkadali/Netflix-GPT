import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
        
        {user && (<div className="flex p-2">
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

        </div>)}
        
    </div>
};

export default Header;