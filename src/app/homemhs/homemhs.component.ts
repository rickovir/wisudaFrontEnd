import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homemhs',
  templateUrl: './homemhs.component.html',
  styleUrls: ['./homemhs.component.css']
})
export class HomemhsComponent implements OnInit {

  MhsForm: FormGroup;
  ModeEdit: boolean;
  // form data
  nama: FormControl;
  NIM: FormControl;
  tglLahir: FormControl;
  fakultas: FormControl;
  jurusan: FormControl;

  constructor() { }

  ngOnInit() {
  	this.createMhsForm();
  	this.turnOffModeEdit();
  }

  createMhsForm() {
    this.nama = new FormControl('', Validators.required);
    this.NIM = new FormControl('', Validators.required);
    this.tglLahir = new FormControl('', [
      Validators.required,
    ]);
    this.fakultas = new FormControl('', [
      Validators.required,
    ]);
    this.jurusan = new FormControl('', [
      Validators.required,
    ]);
    this.MhsForm = new FormGroup({
      nama : this.nama,
      NIM : this.NIM,
      tglLahir : this.tglLahir,
      fakultas : this.fakultas,
      jurusan : this.jurusan,
    });
  }

  turnOnModeEdit()
  {
  	this.ModeEdit = true;
	this.MhsForm.enable();
  }
  turnOffModeEdit()
  {
  	this.ModeEdit = false;
	this.MhsForm.disable();
  }
}
