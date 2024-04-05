import React ,{ useState, useEffect } from "react"
import AllRetsept from "../components/AllRetsept"



export default function Home() {
    
    const [retsepts , setRetsepst] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/retseptlar")
          .then((data) => {
            return data.json()
          })
          .then((retsepts) => {
            setRetsepst(retsepts);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {retsepts && <AllRetsept retsepts={retsepts} />}
        </div>
    )
}
