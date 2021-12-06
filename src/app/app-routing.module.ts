import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageFilmComponent } from './homepage-film/homepage-film.component';

const routes: Routes = [
  { path: 'home', component: HomepageFilmComponent },
  { path: 'detail', component: DetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
