"use client"
import { useDispatch, useSelector } from "react-redux";
import {FetchAPIuser} from "../redux/slice"
import { useEffect } from "react";

export default function Page(){
  const profileID= 1
  const dispatch= useDispatch()
  const showndata= useSelector((data)=>data.Userdata.FetchAPIuser);
 useEffect(()=>{
  dispatch(FetchAPIuser(profileID))
 },[])
    return (
      <div className="flex flex-col min-h-screen bg-gray-800 relative">
        TODO list
        <br></br>
        
        
        {
         showndata.length && showndata.map((item)=>(
           <h1>
            <p>name:{item.name}</p>
            <p>Username:{item.username}</p>
            {/* <p>Addrees:{item.address.city}</p> */}
           
           
           
           
           
           
           
           
           
           </h1>
          ))          
        }
      </div>
      
    );
  }