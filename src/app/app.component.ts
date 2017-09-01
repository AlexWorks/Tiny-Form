import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    '../../node_modules/open-sans-fontface/open-sans.scss']
})

export class AppComponent {

  myForm: any;

  constructor(fb: FormBuilder ) {
    this.myForm = fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'password': ['', Validators.compose([
        Validators.required, this.passwordValidator
      ])],
      'sub': ['', null]
    });
  }

  ngOnInit() {
  }

  passwordValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value.length < 8) {
      return {invalidPass: true};
    }

  }

  handleCheckboxClick(event) {
    let target = event.target.closest('.input-fields__notifications');
    target.classList.toggle('input-fields__notification_checked');
  }

  onSubmit(value){
    console.log(value);
  }

}
