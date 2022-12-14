import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatamokService } from 'src/app/service/datamok.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  form: FormGroup;
  formcode: FormGroup;
  formsignup: FormGroup;


  modallogin = true;
  modalsign = true;
  modalsignin1 = true;
  modalsignin2 = false;
  modalsignin3 = false;
  modalsignup1 = false;
  constructor(
    private router: Router,
    private datamokservice: DatamokService,
    private formBuilder: FormBuilder,

  ) {
    this.form = this.formBuilder.group({
      ddd: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
    this.formcode = this.formBuilder.group({
      code: ['', [Validators.required]],
    });
    this.formsignup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cel: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      check: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  log(value: string) {
    if (value === 'signin') {
      this.modalsignin1 = false;
      this.modalsignin2 = true;
    } else if (value === 'sendtel') {
      this.modalsignin2 = false;
      this.modalsignin3 = true;
    } else if (value === 'close') {
      setTimeout(() => {
        this.datamokservice.opModalLogin();
      }, 100);
    } else if (value === 'signup') {
      this.modalsignin1 = false;
      this.modalsignup1 = true;
    }
  }
  onDigitInput(event: any) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }

}