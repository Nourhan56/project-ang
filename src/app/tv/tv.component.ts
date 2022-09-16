import { Component, OnInit } from '@angular/core';
import { TvserverService } from '../tvserver.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  length!: number;
  lang: string = 'en-Us';
  currentPage!: number;
  allTvs!:any[]
  filteredTV: any[] = [];
  constructor(private tvserv:TvserverService) { }
  private _search: string = '';
  pageSize:number=20
  ngOnInit(): void {
    this.tvserv.getAllTvShows().subscribe({next:(data)=>{
      this.length = data.total_pages;
      this.allTvs=data.results;
      this.filteredTV = this.allTvs;
     },
    });
  }
  get search(): string {
    return this._search;
  }

  set search(val: string) {
    this._search = val;
    this.searchtv(val);
  }
  toggleDiscription(tvId: number): void {
    this.allTvs.forEach(function (tv) {
      if (tv.id == tvId) {
        tv.isVisable = !tv.isVisable;
        console.log(tv);
      }
      
    });
  }
  searchtv(value: string) {
    this.tvserv.searchbyTVName(value).subscribe({
      next: (data) => {
        this.filteredTV = data.results;
      },
    });
  }
  toggleLang(): void {
    this.lang = this.lang == 'en-US' ? 'ar-SA' : 'en-US';
    this.tvserv.getAllTvShows(this.lang).subscribe({
      next: (tvData) => {
        this.allTvs = tvData.results;
        this.filteredTV = this.allTvs;
      },
    });
  }
  messageFromChild(data: string) {
    console.log(data);
  }
  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.tvserv.getAllTvShows(this.lang ,this.currentPage ).subscribe({
      next: (tvData) => {
        this.allTvs = tvData.results;
        this.filteredTV = this.allTvs;
      },
    });
  }
}
