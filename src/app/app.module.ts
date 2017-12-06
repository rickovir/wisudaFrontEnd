import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginmhsComponent } from './loginmhs/loginmhs.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { 
      path: '', 
      component: LoginmhsComponent 
    },
	  { 
	  	path: 'mahasiswamasuk/:k', 
	  	component: LoginmhsComponent 
	  },
	  { 
	  	path: 'dashboard', 
	  	component: DashboardComponent 
	  },
	  { 
	  	path: 'home', 
	  	component: HomeComponent 
	  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginmhsComponent,
    HomeComponent
  ],
  imports: [
  	 RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
