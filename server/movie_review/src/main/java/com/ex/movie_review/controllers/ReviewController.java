package com.ex.movie_review.controllers;

import com.ex.movie_review.models.Review;
import com.ex.movie_review.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path = "reviews")
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {
    private ReviewRepository reviewRepository;

    @Autowired
    public void setReviewRepository(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping()
    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    @GetMapping(path = "{id}")
    public Review getReviewById(@PathVariable long id) {
        return reviewRepository.getById(id);
    }

    @PostMapping()
    public void createNewReview(@RequestBody Review review) {
        System.out.println(review);
        reviewRepository.save(review);
    }

    @PatchMapping(path = "{id}")
    public void updateReview(@PathVariable long id, @RequestBody Review reviewUpdate) {
        Review review = reviewRepository.getById(id);
        if (reviewUpdate.getSubject() != null) {
            review.setSubject(reviewUpdate.getSubject());
        }
        if (reviewUpdate.getBody() != null) {
            review.setBody(reviewUpdate.getBody());
        }
        if (reviewUpdate.getImdbid() != null) {
            review.setImdbid(reviewUpdate.getImdbid());
        }
        review.setUpdatedat(LocalDateTime.now());
    }

    @DeleteMapping(path = "{id}")
    public void deleteReview(@PathVariable long id) {
        reviewRepository.delete(getReviewById(id));
    }
}
