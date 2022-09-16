import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
const routes: Routes = [
  {path:"movies",component:MoviesComponent},
  {path:'movies/:id',component:MovieDetailsComponent},
  {path:"tv",component:TvComponent},
  {path:'tv/:id',component:TvDetailsComponent},
  {path:" ",redirectTo:"movies" , pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
