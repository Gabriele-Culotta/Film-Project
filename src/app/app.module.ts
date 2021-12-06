import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageFilmComponent } from './homepage-film/homepage-film.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { GaugeModule } from 'angular-gauge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AppComponent, HomepageFilmComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
