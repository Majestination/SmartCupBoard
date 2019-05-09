import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { CupboardReviewComponent } from './cupboard-review/cupboard-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MonitoringComponent,
    AuthComponent,
    RegistrationComponent,
    ProfileTableComponent,
    CupboardReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [],
  entryComponents: [AuthComponent, RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
