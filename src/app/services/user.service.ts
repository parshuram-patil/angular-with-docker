import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUserRequest, RegistrationRequest, GetUserResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  registerUser(regReqBody: RegistrationRequest): Observable<GetUserResponse> {

    return this.httpClient.post<GetUserResponse>(environment.API_URL + '/registration', regReqBody)
  }

  getUser(getUserReqBody: GetUserRequest): Observable<GetUserResponse> {

    return this.httpClient.get<GetUserResponse>(environment.API_URL + '/user?email=' + getUserReqBody.email)
  }
}
