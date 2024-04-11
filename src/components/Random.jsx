import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import Tag from "./Tag";
export default function Random() {
  // const [gif,setgif] = useState('');
  // const[loading,setloading] = useState(false);
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  
  // async function fetchData(){
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //  const {data} = await axios.get(url);
  //  const imageSource = data.data.images.downsized_large.url;
  //  setgif(imageSource);
  //  setloading(false);
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[]);
  
  const {gif,loading,fetchData} = useGif();
  function clickhandler(){
    fetchData();
  }
  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">Random Gif</h1>
      {
        loading ? (<Spinner/>) : ( <img src={gif} width="300" /> ) 
      }



     
      <button onClick={clickhandler}
      className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg font-bold mb-[15px]">
        Generate
      </button>
    </div>
  )
}
