import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActorsComponent } from './movie-actors.component';
import { Movie } from '../movie';

describe('MovieActorsComponent', () => {
  let component: MovieActorsComponent;
  let fixture: ComponentFixture<MovieActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieActorsComponent);
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
