import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriorityRequest } from '../../models/request/priority.request';
import { PriorityResponse } from '../../models/response/priority.response';
import { PRIORITY_APIURL } from '../url-links/usertaskmananger-webapi-urls';

@Injectable({
  providedIn: 'root',
})
export class PriorityService {
  constructor(private httpClient: HttpClient) {}

  getPriorities(): Observable<PriorityResponse[]> {
    return this.httpClient.get<PriorityResponse[]>(`${PRIORITY_APIURL}`);
  }

  getTotalPriorities(): Observable<number> {
    return this.httpClient.get<number>(`${PRIORITY_APIURL}/total`);
  }

  getPriorityById(id: number): Observable<PriorityResponse> {
    return this.httpClient.get<PriorityResponse>(`${PRIORITY_APIURL}/${id}`);
  }

  createPriority(request: PriorityRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(`${PRIORITY_APIURL}`, request);
  }

  updatePriority(id: number, request: PriorityRequest): Observable<boolean> {
    return this.httpClient.put<boolean>(`${PRIORITY_APIURL}/${id}`, request);
  }

  deletePriority(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${PRIORITY_APIURL}/${id}`);
  }
}
