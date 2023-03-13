
import axios from "axios";

const baseUrl="https://www.googleapis.com/customsearch/v1"

const params={
    key:"AIzaSyClvbJ71pMAtdNv8yId6PotIjwq-h1vS3k",
    cx:"95cedad4ab1304a88"
}

export  const fetchDataFromApi=async(payload)=>{
    const {data}=await axios.get(baseUrl,{
        params:{...params,...payload}
    })
    return data
}