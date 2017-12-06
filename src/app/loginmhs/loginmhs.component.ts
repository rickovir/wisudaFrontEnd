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
  LoginForm: FormGroup;
  namaLengkap: FormControl;
  NIM: FormControl;
  password: FormControl;
  passwordUlang: FormControl;
  NIMLogin: FormControl;
  passwordLogin: FormControl;

  constructor(private route: ActivatedRoute) {
  	this.kuota = 0;
    this.route.params.subscribe( params => 
      this.kuota += Number(params['k'])
    );
    if(!this.kuota)
      this.kuota = 0;
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
    this.createLoginForm();
  }
  startDaftar()
  {
    if(this.kuota != 0)
    {
      this.page = false;
      this.daftar = true;
      this.login = false;
      this.createRegisForm();
    }
  }

  createLoginForm() {
    this.NIMLogin = new FormControl('', Validators.required);
    this.passwordLogin = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.LoginForm = new FormGroup({
      NIMLogin : this.NIMLogin,
      passwordLogin : this.passwordLogin,
    });
  }

  createRegisForm() {
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
