package com.ex.movie_review.controllers;

import com.ex.movie_review.models.Movie;
import com.ex.movie_review.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "movies")
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
    private MovieRepository movieRepository;

    @Autowired
    public void setMovieRepository(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    /**
     * Get a list of all movies
     * @return List<Movie>
     */
    @GetMapping()
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    /**
     * Get a single movie
     * @param id
     * @return Movie
     */
    @GetMapping(path = "{id}")
    public Movie getMovieById(@PathVariable long id) {
        return movieRepository.getById(id);
    }

    /**
     * Create a new movie listing
     * @param movie
     */
    @PostMapping()
    public void createNewMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
    }

    /**
     * Update a movie
     * @param id
     * @param movieUpdate
     */
    @PatchMapping(path = "{id}")
    public void updateMovie(@PathVariable long id, @RequestBody Movie movieUpdate) {
        Movie movie = movieRepository.getById(id);
        if (movieUpdate.getImdbid() != null) {
            movie.setImdbid(movieUpdate.getImdbid());
        }
    }

    /**
     * Delete a movie
     * @param id
     */
    @DeleteMapping(path = "{id}")
    public void deleteMovie(@PathVariable long id) {
        movieRepository.delete(getMovieById(id));
    }
}
