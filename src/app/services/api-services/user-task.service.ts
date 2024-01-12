import { Injectable } from '@angular/core';
import { USERTASK_APIURL } from '../url-links/usertaskmananger-webapi-urls';
import { Observable } from 'rxjs';
import { UserTaskResponse } from '../../models/response/user-task.response';
import { UserTaskRequest } from '../../models/request/user-task.request';
import { HttpClient } from '@angular/common/http';
import { UserTaskModeType } from '../../models/types/user-task-mode.type';

@Injectable({
  providedIn: 'root',
})
export class UserTaskService {
  constructor(private httpClient: HttpClient) {}

  getUserTasks(): Observable<UserTaskResponse[]> {
    return this.httpClient.get<UserTaskResponse[]>(`${USERTASK_APIURL}`);
  }

  getTotalUserTasks(): Observable<number> {
    return this.httpClient.get<number>(`${USERTASK_APIURL}/total`);
  }

  getUserTaskByMode(
    userId: number,
    mode: UserTaskModeType
  ): Observable<UserTaskResponse[]> {
    return this.httpClient.get<UserTaskResponse[]>(
      `${USERTASK_APIURL}/${userId}/mode/${mode}`
    );
  }

  getUserTaskById(id: number): Observable<UserTaskResponse> {
    return this.httpClient.get<UserTaskResponse>(`${USERTASK_APIURL}/${id}`);
  }

  createUserTask(request: UserTaskRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(`${USERTASK_APIURL}`, request);
  }

  updateUserTask(id: number, request: UserTaskRequest): Observable<boolean> {
    return this.httpClient.put<boolean>(`${USERTASK_APIURL}/${id}`, request);
  }

  deleteUserTask(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${USERTASK_APIURL}/${id}`);
  }
  removeUserTask(id: number): Observable<boolean> {
    return this.httpClient.patch<boolean>(
      `${USERTASK_APIURL}/remove/${id}`,
      {}
    );
  }
  finishUserTask(id: number): Observable<boolean> {
    return this.httpClient.patch<boolean>(
      `${USERTASK_APIURL}/finish/${id}`,
      {}
    );
  }
}
