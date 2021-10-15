package com.ex.movie_review;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MovieReviewApplication {

    @Value("${my.message.value}")
    private String value;

    public static void main(String[] args) {
        SpringApplication.run(MovieReviewApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner() {
        return args -> System.out.println(value);
    }
}
