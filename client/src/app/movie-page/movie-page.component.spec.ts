import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { Movie } from '../movie';
import { MovieActorsComponent } from '../movie-actors/movie-actors.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ReviewListComponent } from '../review-list/review-list.component';

import { MoviePageComponent } from './movie-page.component';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MoviePageComponent,
        MovieDetailComponent,
        MovieActorsComponent,
        ReviewListComponent
      ],
      imports: [
        MatTabsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageComponent);
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
