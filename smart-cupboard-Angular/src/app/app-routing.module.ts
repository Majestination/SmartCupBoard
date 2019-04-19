import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo:"/home", pathMatch: 'full'},
  { path: 'monitoring', component: MonitoringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
