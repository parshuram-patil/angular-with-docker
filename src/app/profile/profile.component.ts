import { Component, OnInit } from '@angular/core';
import { getProfilePictureName } from '../services/models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading: boolean = true
  loadingMessage: string ="'loading'"
  fullName: string
  profilePictureName: string 
  title: string
  company: string
  address: string
  email: string
  phone: string

  constructor(private regService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.regService.getUser({
      email: 'Parshuram.Patil@gmail.com'
    }).subscribe((user) => {
      this.fullName = user.fullName
      this.profilePictureName = getProfilePictureName(user.firstName)
      this.title = user.title
      this.company = user.company
      this.address = user.address
      this.email = user.email
      this.phone = user.phone
      this.isLoading = false
    }, (error) => {
      alert("Alert")
    })
  }

}
