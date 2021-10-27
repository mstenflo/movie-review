import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieActorsComponent } from './movie-actors/movie-actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UpdateProfilePageComponent } from './update-profile-page/update-profile-page.component';
import { CreateReviewFormComponent } from './create-review-form/create-review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SearchInputComponent,
    MoviePageComponent,
    MovieDetailComponent,
    MovieActorsComponent,
    ActorDetailComponent,
    ReviewListComponent,
    UserProfilePageComponent,
    UpdateProfilePageComponent,
    CreateReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
