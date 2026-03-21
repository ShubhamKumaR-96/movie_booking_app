import Movie from "../models/movie.model.js";

const createMovie=async(req,res)=>{

    try {
        const movie=await Movie.create(req.body)
        return res.status(201).json({
        success:true,
        error:{},
        data:movie,
        message:"Successfully created a new Movie"
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:true,
            error:error,
            data:{},
            message:"Something went wrong"
        })
    }
    
}

export default createMovie;