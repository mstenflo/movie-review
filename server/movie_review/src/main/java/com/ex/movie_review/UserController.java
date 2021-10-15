package com.ex.movie_review;

import models.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "users")
public class UserController {

    @Value("${my.message.value}")
    private String value;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public User getMessage() {
        User user = new User();
        user.setId(3);
        user.setEmail("es@srt.com");
        user.setFirstname("John");
        user.setLastname("Doe");
        user.setUsername("johnny");
        user.setPassword("123");
        user.setPhone("123-123-1231");
        return user;
    }
}
