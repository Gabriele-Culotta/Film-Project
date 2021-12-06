import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detail: any
  id: any
  filmRating = 0

  constructor(private data: DataService , private router: Router) {
    this.id = this.router.getCurrentNavigation()?.extras;
  }

  ngOnInit(): void {
     this.getDetails()
  }

  /* RISOLVERE CON ACTIVATED ROUTE SE NON RIESCO */
  /* PRENDERE IL DATO CHE MI ARRIVA CIOè ID E FARMI LA CHIAMATA,  */

  getDetails(){
    this.data.GetDetails(this.id).subscribe((res) => {
    console.log(res);
    this.detail = res;


    setTimeout(() =>{
      this.filmRating = this.detail.vote_average
    }, 1000);
  });
}
  /* SISTEMARE */
  getColor(value: number): string{
    if (value > 7) {
      return '#5ee432';
    } else if (value > 5) {
      return '#fffa50';
    } else if (value > 3 ) {
      return '#f7aa38'
    } else {
      return '#ef4655';
    }

  }
}
