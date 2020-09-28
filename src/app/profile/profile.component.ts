import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading: boolean = true
  fullName: string
  title: string
  address: string
  email: string
  phone: string

  constructor(private regService: UserService) { }

  ngOnInit(): void {
    this.regService.getUser({
      email: 'Parshuram.Patil@gmail.com'
    }).subscribe((user) => {
      this.fullName = user.fullName
      this.title = user.title
      this.address = user.address
      this.email = user.email
      this.phone = user.phone
      this.isLoading = false
    }, (error) => {
      alert("Alert")
    })
  }

}
