import Movie from "../models/movie.model.js";
import { createMovieService, getMovieById } from "../service/movie.service.js";
import { errResponseBody, successResponseBody } from "../utils/responseBody.js";



export const createMovie=async(req,res)=>{

    try {
        const movie=await createMovieService(req.body)
        successResponseBody.data=movie
        successResponseBody.message="Successfully create the movie"
        return res.status(201).json(successResponseBody.data)
    } catch (error) {
        return res.status(500).json(errResponseBody)
    }
    
}

export const deleteMovie=async(req,res)=>{
    try {
        const response=await deleteMovie(req.params.movieId)
        successResponseBody.data=response
        successResponseBody.message="Successfully deleted the movie"
       return res.status(201).json(successResponseBody)
    } catch (error) {
        console.log(error)
        return res.status(500).json(errResponseBody)
    }
}

export const getMovie=async(req,res)=>{
    try {
        const response=await getMovieById(req.params.id)
        if(response.err){
            errResponseBody.err=response.err
            return res.status(response.code).json(errResponseBody)
        }
        successResponseBody.data=response
        successResponseBody.message="Successfully fetched the movie"
        return res.status(200).json(successResponseBody)
    } catch (error) {
        console.log(error)
        return res.status(500).json(errResponseBody)
    }
}