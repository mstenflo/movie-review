package com.ex.movie_review.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "users")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private LocalDateTime date;
}
