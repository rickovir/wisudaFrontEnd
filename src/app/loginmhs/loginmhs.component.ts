import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-loginmhs',
  templateUrl: './loginmhs.component.html',
  styleUrls: ['./loginmhs.component.css']
})
export class LoginmhsComponent implements OnInit {
  page:boolean = true;
  login:boolean = false;
  daftar:boolean = false;
  kuota:any;
  staticAlert = true;
  constructor(private route: ActivatedRoute) {
  	this.kuota = 0;
    this.route.params.subscribe( params => this.kuota += Number(params['k']));
  }

  ngOnInit() {
    if(this.kuota != 0)
       this.staticAlert = false
  }

  tambahKuota()
  {
  	this.kuota++;
  }

  startLogin()
  {
    this.page = false;
    this.daftar = false;
    this.login = true;
  }
  startDaftar()
  {
    this.page = false;
    this.daftar = true;
    this.login = false;
  }

}
