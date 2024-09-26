import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IPersonal, IPersonalResponse } from '../interfaces/personal.interface';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class PersonalService {

    private readonly API_URL = `${environment.BACKEND_URL}/usuarios`

    constructor(
        private readonly _httpClient : HttpClient,
    ) { }
    

    getPersonalData():Observable<IPersonal[]>{
        return this._httpClient.get<IPersonal[]>(this.API_URL).pipe(
            delay(1000)
        )
    };

}