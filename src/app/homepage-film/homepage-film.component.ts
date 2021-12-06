import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavigationEnd, NavigationExtras, NavigationStart, NavigationCancel, NavigationError, Router, Event } from '@angular/router';


@Component({
  selector: 'app-homepage-film',
  templateUrl: './homepage-film.component.html',
  styleUrls: ['./homepage-film.component.css'],
})
export class HomepageFilmComponent implements OnInit {
  popular: any;
  query: any
  showLoadingIndicator = true;

  constructor(private data: DataService, private modalService: NgbModal, private router: Router, private http: HttpClient) {

  }
  closeResult = '';


  ngOnInit(): void {
    this.getPopular()
  }

  getPopular() {
    this.data.getPopular().subscribe((res) => {
      console.log(res);
      this.popular = res;

    });
  }

  getUtenti(id: any){
   let Url = 'https:'
   this.http.get(Url, id)
  }

  /* search in javascript */

  searchFilm(){
    this.data.searchFilm(this.query).subscribe((res:any) =>{
      console.log('risultato search', res)
      this.popular.results = res.results
    },
    err => {
      console.log(err)
    })
  }

  /* STUDIARE PASSO PER PASSO */

  searchPopular(evt: any) {
    /* console.log(evt); */
    const search = evt.target.value;
    if (search && search.trim() != '') {
      this.popular.results = this.popular.results.filter((item: any) => {
        if (item.original_title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return this.getPopular();
    }
  }


   openDetail(pop: any){
     const data: NavigationExtras = pop.id;
    this.router.navigate(['detail'], data);
    setTimeout(function(){""}, 3000);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  Loading(){
  this.router.events.subscribe((routerEvent: Event) => {
      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }
    });
    }
  }


