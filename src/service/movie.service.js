
import Movie from "../models/movie.model.js";

export const createMovieService=async(data)=>{
    const movie=await Movie.create(data)
    return movie
}

export const deleteMovie=async(id)=>{
    const movie=await Movie.findByIdAndDelete(id)
    return movie
}

export const getMovieById=async(id)=>{
   
        const movie=await Movie.findById(id)
        if(!movie){
        return {
                err:"No Movie found by for the corresponding id provided ",
                code:404
            }
        }
        return movie
}
