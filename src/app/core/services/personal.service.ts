import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPersonalResponse } from '../interfaces/personal.interface';

@Injectable({providedIn: 'root'})
export class PersonalService {

    private readonly API_URL = `${environment.BACKEND_URL}/personal`

    constructor(
        private readonly _httpClient : HttpClient,
    ) { }


    getPersonalData():Observable<IPersonalResponse>{
        return this._httpClient.get<IPersonalResponse>(this.API_URL).pipe(
            delay(1000)
        )
    };

}
