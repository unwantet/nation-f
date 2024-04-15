import React ,{ useState, useEffect } from "react"
import AllRetsept from "../components/AllRetsept"
import { useFetch } from "../hooks/useFetch"
import "./Home.css"



export default function Home() {
    
    const { 
      data : retsepts ,
      isPending ,
      error  } = useFetch("http://localhost:3000/retseptlar")
      if(error) return <h1 className="text-center text-4xl mt-48 font-bold">{error}</h1>
      if(isPending) return <div class="custom-loader"></div>  

    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {retsepts && <AllRetsept retsepts={ retsepts } />}
        </div>
    )
}
