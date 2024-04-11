import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Tag() {
  
  const [Tag,setTag] = useState('');
  const {gif,loading,fetchData} = useGif(Tag);
  function clickhandler(){
    fetchData(Tag );
  }
  function changehandler(event ){
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">Random {Tag} Gif</h1>
      {
        loading ? (<Spinner/>) : ( <img src={gif} width="300" /> ) 
      }



     <input type="text" 
     className="w-10/12 text-lg py-2 rounded-lg mb-[1px] text-center "
     onChange={changehandler} 
     value={Tag}/>
      <button onClick={clickhandler}
      className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg font-bold mb-[15px]">
        Generate
      </button>
    </div>
  )
}
