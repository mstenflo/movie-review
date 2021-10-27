import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UpdateProfilePageComponent } from './update-profile-page/update-profile-page.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: RegisterPageComponent},
  {path: "movies/:id", component: MoviePageComponent},
  {path: ":username/profile", component: UserProfilePageComponent},
  {path: ":username/profile/edit", component: UpdateProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
