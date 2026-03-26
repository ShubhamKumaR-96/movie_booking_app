import { createMovie, deleteMovie, getMovie, getMovies, updateMovie } from "../controller/movie.controllers.js"
import { validateMovieCreateRequest } from "../middleware/movie.middleware.js"

const routes=(app)=>{
    app.post('/mba/api/v1/movies',validateMovieCreateRequest,createMovie)
    app.delete('/mba/api/v1/movies/:movieId',deleteMovie)
    app.get('/mba/api/v1/movies/:id',getMovie)
    app.put('/mba/api/v1/movies/:id',updateMovie)
    app.get('/mba/api/v1/movies',getMovies)

}
export default routes