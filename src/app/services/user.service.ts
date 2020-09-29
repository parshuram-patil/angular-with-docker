import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUserRequest, RegistrationRequest, GetUserResponse, getApiUrl } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  registerUser(regReqBody: RegistrationRequest): Observable<GetUserResponse> {

    return this.httpClient.post<GetUserResponse>(getApiUrl() + '/registration', regReqBody)
  }

  getUser(getUserReqBody: GetUserRequest): Observable<GetUserResponse> {
    let urlQuery = getUserReqBody.email ? '?email=' + getUserReqBody.email : ''
    return this.httpClient.get<GetUserResponse>(getApiUrl() + '/user' + urlQuery)
  }
}
