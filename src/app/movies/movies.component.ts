import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieserverService } from '../movieserver.service'
import { IMovie } from '../Imove';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  length!: number;
  lang: string = 'en-Us';
  currentPage!: number;
  constructor(public  Movieserver:MovieserverService) { }
  private _search: string = '';
  pageSize:number=20
  allMovies: any[] = [];
  filteredMovies: any[] = [];
  ngOnInit(): void {
    this.Movieserver.getAllMovies().subscribe({
      next: (movsData) => {
        this.length = movsData.total_pages;
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });

  }
  get search(): string {
    return this._search;
  }

  set search(val: string) {
    this._search = val;
    this.searchMovies(val);
  }
  toggleDiscription(movieId: number): void {
    this.allMovies.forEach(function (movie) {
      if (movie.id == movieId) {
        movie.isVisable = !movie.isVisable;
        console.log(movie);
      }
      
    });
  }

  searchMovies(value: string) {
    this.Movieserver.searchbyMovieName(value).subscribe({
      next: (data) => {
        this.filteredMovies = data.results;
      },
    });
  }
  toggleLang(): void {
    this.lang = this.lang == 'en-US' ? 'ar-SA' : 'en-US';
    this.Movieserver.getAllMovies(this.lang).subscribe({
      next: (movsData) => {
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });
  }
  messageFromChild(data: string) {
    console.log(data);
  }
  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.Movieserver.getAllMovies(this.lang, this.currentPage).subscribe({
      next: (movsData) => {
        this.allMovies = movsData.results;
        this.filteredMovies = this.allMovies;
      },
    });
  }

}
