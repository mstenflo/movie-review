package com.ex.movie_review.controllers;

import com.ex.movie_review.models.User;
import com.ex.movie_review.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
@Transactional
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Get a list of all users
     * @return List<User>
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAll() {
        List<User> users = userRepository.findAll();
        return users;
    }

    /**
     * Get user by id
     * @param id
     * @return
     */
    @GetMapping(path="{id}")
    @Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRES_NEW, readOnly = true)
    public User getUserById(@PathVariable long id) {
        return userRepository.getById(id);
    }

    /**
     * Get user by username
     * @param username
     * @return
     */
    @GetMapping(path="username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * Create a new user
     * @param newUser
     */
    @PostMapping()
    public void createNewUser(@RequestBody User newUser) {
        userRepository.save(newUser);
    }

    /**
     * Update a user
     * @param id
     * @param userUpdate
     */
    @PatchMapping(path = "{id}")
    public void updateUser(@PathVariable long id, @RequestBody User userUpdate) {
        User user = userRepository.getById(id);
        if (userUpdate.getUsername() != null) {
            user.setUsername(userUpdate.getUsername());
        }
        if (userUpdate.getPassword() != null) {
            user.setPassword(userUpdate.getPassword());
        }
        if (userUpdate.getEmail() != null) {
            user.setEmail(userUpdate.getEmail());
        }
        if (userUpdate.getPhone() != null) {
            user.setPhone(userUpdate.getPhone());
        }
        if (userUpdate.getFirstname() != null) {
            user.setFirstname(userUpdate.getFirstname());
        }
        if (userUpdate.getLastname() != null) {
            user.setLastname(userUpdate.getLastname());
        }
        userRepository.save(user);
    }
}
