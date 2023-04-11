import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'reactive forms demo';
  submitted: boolean;
  constructor() {}
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(),
    });
  }
  loginUser() {
    if (this.myForm.valid) {
      console.log(this.myForm.status);
      console.log(this.myForm.value);
      this.submitted = true;
    }
  }
}
