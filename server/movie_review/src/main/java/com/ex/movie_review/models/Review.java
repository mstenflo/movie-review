package com.ex.movie_review.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "reviews")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Review {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String subject;
    private String body;

    @ManyToOne
    @JoinColumn(name="reviewerid")
    private User reviewer;

    private String imdbid;

    private LocalDateTime createdat;
    private LocalDateTime updatedat;
}
