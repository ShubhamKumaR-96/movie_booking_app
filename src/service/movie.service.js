import Movie from "../models/movie.model.js";

export const createMovieService = async (data) => {
  const movie = await Movie.create(data);
  return movie;
};

export const deleteMovie = async (id) => {
  const movie = await Movie.findByIdAndDelete(id);
  return movie;
};

export const getMovieById = async (id) => {
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return {
        err: "No Movie found by for the corresponding id provided ",
        code: 404,
      };
    }
    return movie;
  } catch (error) {
    if (error.name == "Validation Error") {
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });
      console.log(err);
      return { err: err, code: 422 };
    } else {
      throw error;
    }
  }
};

export const updateMovieService = async (id, data) => {
  try {
    const movie = await Movie.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    
    if (!movie) {
      return { err: "Movie not found", code: 404 };
    }

    return movie;
  } catch (error) {
    if (error.name === "ValidationError") {
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });
      return { err: err, code: 422 };
    } else {
      throw error;
    }
  }
};
