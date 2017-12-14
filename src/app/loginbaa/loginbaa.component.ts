import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginbaa',
  templateUrl: './loginbaa.component.html',
  styleUrls: ['./loginbaa.component.css']
})
export class LoginbaaComponent implements OnInit {
  LoginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
  	this.createLoginForm();
  }

  createLoginForm() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.LoginForm = new FormGroup({
      username : this.username,
      password : this.password,
    });
  }
}
