package com.ex.movie_review.models;

import lombok.*;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@AllArgsConstructor
@Data
@Entity
@NoArgsConstructor
public class User {
    @javax.persistence.Id
    @Column(name = "id", nullable = false)
    private Long id;

    public String username;
    public String password;
    public String firstname;
    public String lastname;
    public String email;
    public String phone;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
