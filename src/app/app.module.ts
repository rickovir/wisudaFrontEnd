import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginmhsComponent } from './loginmhs/loginmhs.component';
import { HomeComponent } from './home/home.component';
import { HomemhsComponent } from './homemhs/homemhs.component';
import { LoginbaaComponent } from './loginbaa/loginbaa.component';
import { HomebaaComponent } from './homebaa/homebaa.component';

const appRoutes: Routes = [
    { 
      path: '', 
      component: LoginmhsComponent 
    },
    { 
      path: 'mahasiswa-masuk/:k', 
      component: LoginmhsComponent 
    },
    { 
      path: 'baa-masuk', 
      component: LoginbaaComponent 
    },
    { 
      path: 'mahasiswa-home', 
      component: HomemhsComponent 
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
    HomeComponent,
    HomemhsComponent,
    LoginbaaComponent,
    HomebaaComponent
  ],
  imports: [
  	 RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
