import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fName: string
  lName: string
  title: string
  company: string
  address: string
  phone: string

  constructor(private regService: UserService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    // console.log(this.fName + " " + this.lName)
    this.regService.registerUser({
      firstName: this.fName,
      lastName: this.lName,
      title: this.title,
      company: this.company,
      address: this.address,
      phone: this.phone,
    }).subscribe((user) => {
      alert(user.email)
    }, (error) => {
      alert("Alert")
    })
  }

}
