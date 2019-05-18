import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  ShelfIdForm: FormGroup;  
	response: any;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  onSubmit() {
   this.http.get(`/api/shelfs/${this.ShelfIdForm.value.ShelfId}/items`)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }

  ngOnInit() {
  this.ShelfIdForm = this.fb.group({
      ShelfId: ['']
    });
  }

}
