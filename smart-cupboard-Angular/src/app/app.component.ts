import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../app/auth/auth.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public signIn: MatDialog ) { }

  onCreate() {
  	const dialogRef = this.signIn.open(AuthComponent, {
  		width:'400px',
  		data: {}
  	});
  }

}
