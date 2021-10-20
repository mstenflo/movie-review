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
public class MovieController {
    private MovieRepository movieRepository;

    @Autowired
    public void setMovieRepository(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping()
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    @GetMapping(path = "{id}")
    public Movie getMovieById(@PathVariable long id) {
        return movieRepository.getById(id);
    }

    @PostMapping()
    public void createNewMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
    }

    @PatchMapping(path = "{id}")
    public void updateMovie(@PathVariable long id, @RequestBody Movie movieUpdate) {
        Movie movie = movieRepository.getById(id);
        if (movieUpdate.getTitle() != null) {
            movie.setTitle(movieUpdate.getTitle());
        }
    }

    @DeleteMapping(path = "{id}")
    public void deleteMovie(@PathVariable long id) {
        movieRepository.delete(getMovieById(id));
    }
}
