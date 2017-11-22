import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginmhsComponent } from './loginmhs/loginmhs.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	  { 
	  	path: 'loginmhs', 
	  	component: LoginmhsComponent 
	  },
	  { 
	  	path: 'dashboard', 
	  	component: DashboardComponent 
	  },
	  { 
	  	path: '', 
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
