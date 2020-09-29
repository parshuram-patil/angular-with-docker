import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private regService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params["email"]
    })
    this.loadingMessage =  this.email ? this.email.split('.')[0] + ', we are creating your profile' : 'loading'
    this.isLoading = true
    this.regService.getUser({
      email: this.email
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
      alert(error.error.error)
      this.router.navigate(['/'])
    })
  }

}
