import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"
import { Link } from "react-router-dom"

export default function RetseptInfo() {
    const { id } = useParams()

    const [retsept , setRetseps] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/retseptlar/" + id)
          .then((data) => {
            return data.json()
          })
          .then((retsept) => {
            setRetseps(retsept);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      
    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {
        retsept && 
        <div className="flex gap-[20px] flex-wrap">
            <div className="w-[630px]">
                <img src={retsept.img} 
                alt={retsept.name}
                className="w-[630px] h-[393px]  mb-10 rounded" />
                <h1 className="text-5xl font-bold text-blue-400 mb-4">
                  {retsept.name} 
                  
                </h1>
                <p className="">{retsept.description}</p>
            </div>
            <div className="w-[350px] border border-cyan-400 p-6 rounded-lg shadow-lg shadow-cyan-500/50">
              <ol>
                <h1 className="text-3xl font-bold text-orange-600 mb-11 flex w-full justify-between">
                  Ingerediendlar
                  <Link to="/">
                  <svg className=" hover:rotate-[160deg] hover:transition-all" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="#00ffcb" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"></path></svg>
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
                  <p className="text-[30px] font-serif font-extrabold text-pink-400">{retsept.cookingTime}</p>
                  </div>
              </ol>
            </div>
        </div>
        }
        
        </div>
    )
}
