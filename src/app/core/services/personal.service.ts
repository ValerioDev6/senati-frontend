import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPersonalResponse } from '../interfaces/personal.interface';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})
export class PersonalService {


    private readonly API_URL = `${environment.BACKEND_URL}/personal`

    constructor(
        private readonly _httpClient : HttpClient,
    ) { }


    getPersonalData(page: number, limit: number, search: string = ''): Observable<IPersonalResponse> {
      const params = { page: page.toString(), limit: limit.toString(), search };
      return this._httpClient.get<IPersonalResponse>(this.API_URL, { params }).pipe(
        delay(1000)
      );
    }

}
