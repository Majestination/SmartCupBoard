import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

import { Sector } from 'D:/Project/angular/SmartCupBoard/smart-cupboard-Angular/src/environments/sector'

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

	sectors: Sector[] = [
		{text: 'One', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, soluta.' , cols: 1, rows: 1, isHere: true},
		{text: 'Two', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, id.' , cols: 1, rows: 1, isHere: false},
		{text: 'Three', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, doloribus?' , cols: 1, rows: 1, isHere: true},
		{text: 'Four', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, debitis.' , cols: 1, rows: 1, isHere: true},
		{text: 'Five', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ducimus!' , cols: 1, rows: 1, isHere: false}
	];

	addSector() {
		this.sectors.push(new Sector()) 
	}

  constructor() { }

  ngOnInit() {
  }

}
