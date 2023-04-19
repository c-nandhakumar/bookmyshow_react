import axios from "axios";

export default axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
        headers:{
        Accept: "application/json"
        },
        params:{
            api_key: "4d787d53b25af3a115347b6db2063faa",
            with_original_language: "ta",
            start_date:"2023-02-01" ,
            end_date: "2023-03-31",
            sort_by :"release_date.desc" 
        }
        
    }
);

export const searchMovies = (query)=>{
    return axios.create({baseURL: "https://api.themoviedb.org/3",
    headers:{
    Accept: "application/json"
    },
    params:{
        api_key: "4d787d53b25af3a115347b6db2063faa",
        language: "ta-IN",
        primary_release_year:"2023",
        query: query
    }
});
}

// /movie/latest