// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (Tag) => {
  
  const [gif,setgif] = useState('');
  const[loading,setloading] = useState(false);
 
  
  async function fetchData(Tag){
    setloading(true);
    
   const {data} = await axios.get(Tag ? `${url}&tag=${Tag}` : url);
   const imageSource = data.data.images.downsized_large.url;
   setgif(imageSource);
   setloading(false);
  }
  useEffect(()=>{
    fetchData(`car`);
  },[]);
  return {gif , loading ,fetchData} ;

}

export default useGif;
