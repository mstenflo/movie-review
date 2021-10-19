package com.ex.movie_review;

import com.ex.movie_review.models.User;
import com.ex.movie_review.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(path = "users")
@Transactional
public class UserController {

    @Value("${my.message.value}")
    private String value;

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAll() {
        List<User> users = userRepository.findAll();
        return users;
    }
//
//    @GetMapping(path="u")
//    public User GetUserWithId(@RequestParam(value = "id", required = false) long userId) {
//        System.out.println("Getting user with id " + userId);
//        return new User();
//    }

    @GetMapping(path="{id}")
    @Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRES_NEW, readOnly = true)
    public User getUserById(@PathVariable long id) {
        System.out.println("Getting user with id from path " + id);
        User user = userRepository.getById(id);
        System.out.println(user);

        return user;
    }

    @GetMapping(path="username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        System.out.println("Username: " + username);
        User user = userRepository.findByUsername(username);
        System.out.println(user);
        return user;
    }

    @PostMapping()
    public void createNewUser(@RequestBody User newUser) throws URISyntaxException {
        System.out.println("Creating new user");
        System.out.println(newUser);
        userRepository.save(newUser);
//        User user = new User();
//        return ResponseEntity.created(new URI("http://localhost:8001/api/users/4")).build();
    }
}
