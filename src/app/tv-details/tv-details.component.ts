import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TvserverService } from '../tvserver.service';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
 tv!:any
  isLoading:boolean=true;
  constructor(private route:ActivatedRoute,private TvserverService:TvserverService) { }

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'))
    this.TvserverService.getTVById(id).subscribe({next:(tvData)=>{
        this.tv=tvData;
        this.isLoading=false;
    }})
  }
  }


