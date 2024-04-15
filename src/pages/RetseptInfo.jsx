import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"
import { MdDeleteForever } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import {useFetch} from "../hooks/useFetch";


export default function RetseptInfo() {
    const { id } = useParams()
    

    const { 
      data : retsept ,
      isPending ,
      error  } = useFetch("http://localhost:3000/retseptlar/"+id)
      if(error) return <h1 className="text-center text-4xl mt-48 font-bold">{error}</h1>
      if(isPending) return <h1 className="text-center text-4xl mt-48 font-bold">Loading...</h1>  

      const handleDelete = () => {
        fetch("http://localhost:3000/retseptlar/" + id, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              
              window.location.href = "/";
              toast.success("Retsept o'chirildi");
            } else {
              console.log("Retsept o'chirilmadi");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      
    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {
        retsept && 
        <div className="flex gap-[20px] flex-wrap">
            <div className="w-[630px]">
                <img src={retsept.img} 
                alt={retsept.name}
                className="  mb-10 rounded" />
                <h1 className="text-5xl font-bold text-blue-400 mb-4">
                  {retsept.name} 
                  
                </h1>
                <p className="">{retsept.description}</p>
            </div>
            <div className="w-[350px] border border-cyan-400 p-6 rounded-lg shadow-lg shadow-cyan-500/50">
              <ol>
              <Toaster/>
                <h1 className="text-3xl font-bold text-orange-600 mb-11 flex w-full justify-between">
                  Ingerediendlar
                  <Link to="/">
                    <div className="flex gap-1">

                    <MdDeleteForever onClick={handleDelete} />
                  <svg className=" hover:rotate-[160deg] hover:transition-all" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="#00ffcb" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"></path></svg>
                    </div>
                  </Link>
                  </h1>
                {retsept.ingerediends.map((ing ,index) => (
                  <li className="mb-2 flex w-full justify-between" key={ing}>
                    <p className="font-bold text-amber-200 text-2xl">{index + 1}.</p>
                    <p className="text-2xl">{ing}</p>
                    <p></p>
                    </li>
                ))}

                <div className="mt-10">
                   <h1 className="text-4xl text-green-600">Tayyorlanish vaqti:</h1> 
                  <br />
                  <p className="text-[30px] font-serif font-extrabold text-pink-400">{retsept.cookingTime} minut</p>
                  </div>
              </ol>
            </div>
        </div>
        }
        
        </div>
    )
}
