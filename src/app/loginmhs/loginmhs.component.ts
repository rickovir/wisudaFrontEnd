import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

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
// test form

  RegisForm: FormGroup;
  namaLengkap: FormControl;
  NIM: FormControl;
  password: FormControl;
  passwordUlang: FormControl;

  constructor(private route: ActivatedRoute) {
  	this.kuota = 0;
    this.route.params.subscribe( params => this.kuota += Number(params['k']));
  }

  ngOnInit() {
    if(this.kuota != 0)
       this.staticAlert = false
     this.createFormControls();
     this.createForm();
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

  createFormControls() {
    this.namaLengkap = new FormControl('', Validators.required);
    this.NIM = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.passwordUlang = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }
  createForm() {
    this.RegisForm = new FormGroup({
      namaLengkap : this.namaLengkap,
      NIM : this.NIM,
      password : this.password,
      passwordUlang : this.passwordUlang
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
     return g.get('password').value === g.get('passwordUlang').value
        ? null : {'mismatch': true};
  }
}
