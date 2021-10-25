package com.ex.movie_review;

import com.ex.movie_review.controllers.MovieController;
import com.ex.movie_review.controllers.ReviewController;
import com.ex.movie_review.controllers.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MovieReviewApplicationTests {

    @Autowired
    private UserController userController;

    @Test
    void userContextLoads() {
        assertThat(userController).isNotNull();
    }

    @Autowired
    private MovieController movieController;

    @Test
    void movieContextLoads() {
        assertThat(movieController).isNotNull();
    }

    @Autowired
    private ReviewController reviewController;

    @Test
    void reviewContextLoads() {
        assertThat(reviewController).isNotNull();
    }

}
