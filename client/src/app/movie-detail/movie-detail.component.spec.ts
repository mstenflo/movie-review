import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { Movie } from '../movie';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;

    let expectedMovie : Movie = {
      id: "tt0947798",
      title: "Black Swan",
      plot: "A plot",
      awards: "Some awards.",
      actorList: [
        
      ],
      runtimeStr: "1h 48min",
      fullTitle: "Black Swan (2021)",
      image: "img",
      year: 2010,
      contentRating: "R",
      imDbRating: 8
    }

    component.movie = expectedMovie;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
