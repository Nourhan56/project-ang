import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../post';
import { PostserviceService } from '../postservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( public posserv:PostserviceService) { }
  private _searchValue: string = '';
 postt:any[]=[]
 fillpost:post[]=[]
 
  ngOnInit() {
   /* this.posserv.getpost().subscribe({next:(data)=>{
  
      this.postt=data;
      this.fillpost=this.postt
    }});
  */
  }
   
   
  /*searchpost(value: string) :{
    this.posserv.searchpostt(value).subscribe({
      next: (searchval) => {
        console.log(searchval);
        
      },
    });
    
  }*/
 /* arr:any[]=[];
  searchpost(value: string) {
    this.posserv.searchpostt(value).subscribe({
      next:(dataa) => {
      console.log(dataa);
      this.arr.push(dataa)
    this.postt= this.arr
  this.fillpost=this.postt
    
  
      
        
      },
    });
   
    
  }
  
  get searchvalue():string{
    return this._searchValue
  }
  set searchvalue(val: string) {
    this._searchValue = val;
    console.log(this._searchValue);
    this.searchpost(val)
   
  }*/

  
}
