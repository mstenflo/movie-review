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

    /**
     * Get a list of all reviews
     * @return List<Review>
     */
    @GetMapping()
    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    /**
     * Get a single review
     * @param id
     * @return Review
     */
    @GetMapping(path = "{id}")
    public Review getReviewById(@PathVariable long id) {
        return reviewRepository.getById(id);
    }

    /**
     * Update a review
     * @param review
     */
    @PostMapping()
    public void createNewReview(@RequestBody Review review) {
        review.setCreatedat(LocalDateTime.now());
        review.setUpdatedat(LocalDateTime.now());
        reviewRepository.save(review);
    }

    /**
     * Update a review
     * @param id
     * @param reviewUpdate
     */
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

    /**
     * Delete a review
     * @param id
     */
    @DeleteMapping(path = "{id}")
    public void deleteReview(@PathVariable long id) {
        reviewRepository.delete(getReviewById(id));
    }
}
