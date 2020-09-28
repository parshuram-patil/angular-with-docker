import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  isLoading: boolean = false
  loadingMessage: string = "loading"
  fName: string
  lName: string
  title: string
  email: string
  company: string
  address: string
  phone: string

  constructor(private regService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    // console.log(this.fName + " " + this.lName)
    this.loadingMessage = this.fName + ", Registration is in progress";
    this.isLoading = true
    this.regService.registerUser({
      firstName: this.fName,
      lastName: this.lName,
      title: this.title,
      company: this.company,
      address: this.address,
      phone: this.phone,
    }).subscribe((user) => {
      this.isLoading = false
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "email": user.email
        }
      };
      this.router.navigate(['/profile'], navigationExtras);
      //alert(user.email)
    }, (error) => {
      alert("Alert")
    })
  }

}

