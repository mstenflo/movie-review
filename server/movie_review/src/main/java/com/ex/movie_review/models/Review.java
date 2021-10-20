package com.ex.movie_review.models;

import lombok.*;

import javax.persistence.*;
import java.awt.*;

@Table(name = "movies")
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
    private TextArea body;

    @ManyToOne
    @JoinColumn(name = "reviewerId")
    private User reviewer;
}
