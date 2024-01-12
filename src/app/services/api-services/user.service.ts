import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/response/user.response';
import { USER_APIURL } from '../url-links/usertaskmananger-webapi-urls';
import { UserRequest } from '../../models/request/user.request';
import { UserResumeResponse } from '../../models/response/user-resume.response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(`${USER_APIURL}`);
  }

  getTotalUsers(): Observable<number> {
    return this.httpClient.get<number>(`${USER_APIURL}/total`);
  }

  getUsersForResume(): Observable<UserResumeResponse[]> {
    return this.httpClient.get<UserResumeResponse[]>(
      `${USER_APIURL}/for-resume`
    );
  }

  getUserById(id: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`${USER_APIURL}/${id}`);
  }

  createUser(request: UserRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(`${USER_APIURL}`, request);
  }

  updateUser(id: number, request: UserRequest): Observable<boolean> {
    return this.httpClient.put<boolean>(`${USER_APIURL}/${id}`, request);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${USER_APIURL}/${id}`);
  }
}
