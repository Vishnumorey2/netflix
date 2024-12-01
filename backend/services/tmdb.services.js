import axios from "axios";



 export const fetchFromTMDB = async (url) => {
      

    const options = {
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTUyOTZjZmI1ZDA4Y2JiMGZiMjEwZTQ1ZTExMDNhYSIsIm5iZiI6MTczMjQyMzc0MS4zMTAwNzEsInN1YiI6IjY3NDJhYzdkNjM3MGVjYWQzZmZmZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0fxTBA9vAI1ZxkVub-iLGBkwUgSWtu5EAtvLtqu_VpM' 
     }
    };

    

    const response =await axios.get(url, options)

     if(response.status !== 200){
        throw new Error("Failed to fetch data from TMDB" + response.statusText)
     }

     return response.data;
}