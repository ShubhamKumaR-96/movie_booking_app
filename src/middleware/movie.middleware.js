
const badRequest={
    success:false,
    err:"",
    data:{},
    message:"Malformed Request | Bad Request"
}

export const validateMovieCreateRequest=async(req,res,next)=>{
    if(!req.body.name){
        badRequest.err="The name of the movie is not present in the request"
        return res.status(400).json(badRequest)
    }

    if(!req.body.description){
        badRequest.err='The description of the movie not present in the req'
        return res.status(400).json(badRequest)
    }
    if(!req.body.casts || !(req.body.casts instanceof Array) || req.body.casts.length <= 0){
        badRequest.err="The casts of the movie is not present in the request"
        return res.status(400).json(badRequest)  
    }
    if(!req.body.trailerUrl){
        badRequest.err="The trailer Url is not present in the request"
        return res.status(400).json(badRequest)
    }
    if(!req.body.releaseDate){
        badRequest.err="The release date of movie is not present in the request"
        return res.status(400).json(badRequest)
    }
    if(!req.body.director){
        badRequest.err="The director of movie is not present in the request"
        return res.status(400).json(badRequest)
    }

    next()
}