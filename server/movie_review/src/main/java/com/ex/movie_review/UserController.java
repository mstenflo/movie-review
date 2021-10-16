package com.ex.movie_review;

import models.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

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

//    @GetMapping(path="u")
//    public User GetUserWithId(@RequestParam(value = "id", required = false) Integer userId) {
//        System.out.println("Getting user with id " + userId);
//        return new User();
//    }

    @GetMapping(path="{id}")
    public User getUserById(@PathVariable Integer id) {
        System.out.println("Getting user with id from path " + id);
        User user = new User();
        user.setId(id);
        return user;
    }

    @PostMapping()
    public ResponseEntity createNewUser(@RequestBody User user) throws URISyntaxException {
        System.out.println("Creating new user");
        return ResponseEntity.created(new URI("http://localhost:8001/api/users/4")).build();
    }
}
