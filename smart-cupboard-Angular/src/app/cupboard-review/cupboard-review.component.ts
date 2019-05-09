import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupboard-review',
  templateUrl: './cupboard-review.component.html',
  styleUrls: ['./cupboard-review.component.css']
})
export class CupboardReviewComponent implements OnInit {

  response: any;
  isOpened: boolean = false;

  constructor(private http: HttpClient, ) { }

  open() {
    this.isOpened = !this.isOpened;
  }


  getCupboard(){
  	this.http.get('/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors')
  	.subscribe((response)=>{
  		this.response = response;
  		console.log(this.response);
  	})
  }

  ngOnInit() {
  	this.getCupboard();
  }

}

