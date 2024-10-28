/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_CLIENTE_ALL } from '../config/api/config.url';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ClienteService {
	constructor(private readonly _httpClient: HttpClient) {}

	createPersonal(data: any): Observable<any> {
		return this._httpClient.post<any>(`${URL_CLIENTE_ALL}`, data);
	}
}
