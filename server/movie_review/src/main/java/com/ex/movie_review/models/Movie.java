package com.ex.movie_review.models;


import lombok.*;

import javax.persistence.*;

@Table(name = "movies")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Movie {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String title;
}
