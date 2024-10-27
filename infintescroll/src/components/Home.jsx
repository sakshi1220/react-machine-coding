import React,{useEffect, useRef, useState} from "react";
import MovieComponent from "./MovieComponent";
import Loading from "./Loading";


const Home=()=>{
const [card,setCard] = useState([]);
const [page,setPage] = useState(1);
const [loading, setLoading] = useState(true);
const currentRef= useRef(false)
console.log(card,'card')

    const getData= async ()=>{
        const res=  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        const data=await res.json();
        setCard((prev)=>[...prev,...data]);
        setLoading(false);
        currentRef.current=false;
    }

    const handleScroll= async()=>{
       
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
                setLoading(true)    ;
                setPage((prev)=>prev+1);
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
      if(!currentRef.current){
        currentRef.current=true;
         getData() ;
      }   

    },[page])

    useEffect(()=>{
       
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
        
    },[])


    return(
    <>
        <MovieComponent card={card}/>   
        {loading && <Loading/>}
    </>
    )
}
export default Home