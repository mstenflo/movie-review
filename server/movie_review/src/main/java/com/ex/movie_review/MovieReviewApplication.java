package com.ex.movie_review;

import com.ex.movie_review.models.User;
import com.ex.movie_review.repositories.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MovieReviewApplication {
    public static void main(String[] args) {
        Logger logger = LogManager.getLogger(MovieReviewApplication.class);
        logger.info("Starting App");
        SpringApplication.run(MovieReviewApplication.class, args);
    }
}
