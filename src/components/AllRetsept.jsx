import { Link } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';



function AllRetsept({retsepts}) {
    return (
        <>  
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Toaster/>
            {retsepts.map((retsep) => (
                <div key={retsep.id} className="card w-80 bg-base-100 shadow-xl image-full hover:scale-105 hover:brightness- 60 hover:contrast-125 hover:cursor-pointer hover:transition-all">
                <figure>
                <img src={retsep.img} alt={retsep.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-purple-400">{retsep.name}</h2>
                  <p className="line-clamp-3">{retsep.description}</p>
                  <div className="card-actions justify-end">
                  <Link to={`/RetseptInfo/${retsep.id}`} className="btn btn-outline btn-accent ">More info</Link>
                  </div>
                </div>
              </div>
            ))} 
        </div>
            
        </>
    )
}

export default AllRetsept
