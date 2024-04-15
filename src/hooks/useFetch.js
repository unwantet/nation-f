import { useEffect , useState } from "react";


function useFetch(url , method = "GET") {
    const [data , setData] = useState(null);
    const [isPending , setIsPending] = useState(false);
    const [error , setError] = useState(null);

    const [params , setParams] = useState(null);

    const postData = (newRetsept) => {
        setParams({
            method : "POST" ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newRetsept)
        })
    }



    
    useEffect(() => {
        const getData = async (params) => {
            setIsPending(true);
            try {
                const req = await fetch(url , params);
                if(!req.ok){
                    throw new Error("404 : you still can't get over this error 😮‍💨");
                }
                const response = await req.json();
                setData(response);
                setIsPending(false);
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        }
        if(params && method === "POST"){
            getData(params);
        }
        if(method === "GET"){
            getData();
        }
        
       
    }, [url , method,params])

    return {data , isPending , error , postData }
}

export {useFetch};

