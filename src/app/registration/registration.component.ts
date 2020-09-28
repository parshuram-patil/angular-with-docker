import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fName: string
  lName: string
  address: string
  phone: string

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.fName + " " + this.lName)
 }

}
