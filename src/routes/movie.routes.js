import createMovie from "../controller/movie.controllers.js"

const routes=(app)=>{
    app.post('/mba/api/v1/movies',createMovie)
}
export default routes