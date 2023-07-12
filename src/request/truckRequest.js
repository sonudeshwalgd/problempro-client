import axios from "axios"
export const postTruckRequest=(data)=>{
      try {
      return  axios.post("http://18.143.242.23:8002/api/trucker/createrequest",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 