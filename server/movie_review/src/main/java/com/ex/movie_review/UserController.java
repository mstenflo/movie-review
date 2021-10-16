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
    public User getMessage() {
        User user = new User();
        user.setId(3L);
        user.setEmail("es@srt.com");
        user.setFirstname("John");
        user.setLastname("Doe");
        user.setUsername("johnny");
        user.setPassword("123");
        user.setPhone("123-123-1231");
        return user;
    }

    @GetMapping(path="u")
    public User GetUserWithId(@RequestParam(value = "id", required = false) long userId) {
        System.out.println("Getting user with id " + userId);
        return new User();
    }

    @GetMapping(path="{id}")
    @Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRES_NEW, readOnly = true)
    public User getUserById(@PathVariable long id) {
        System.out.println("Getting user with id from path " + id);
        User user = userRepository.getById(id);
        System.out.println(user);

        return user;
    }

    @PostMapping()
    public ResponseEntity createNewUser(@RequestBody User user) throws URISyntaxException {
        System.out.println("Creating new user");
        return ResponseEntity.created(new URI("http://localhost:8001/api/users/4")).build();
    }
}
