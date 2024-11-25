/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_CLIENTE_ALL } from '../config/api/config.url';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { IClienteResponse } from '../interfaces/cliente.interface';

@Injectable({
	providedIn: 'root',
})
export class ClienteService {
	constructor(private readonly _httpClient: HttpClient) {}

	createPersonal(data: any): Observable<any> {
		return this._httpClient.post<any>(`${URL_CLIENTE_ALL}`, data);
	}
	getClienteData(page: number, limit: number, search: string = ''): Observable<IClienteResponse> {
		const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('search', search);
		return this._httpClient.get<IClienteResponse>(URL_CLIENTE_ALL, { params }).pipe(delay(600));
	}

	deleteClienteById(id: string): Observable<boolean> {
		return this._httpClient.delete(`${URL_CLIENTE_ALL}/${id}`).pipe(
			catchError(() => of(false)),
			map(() => true)
		);
	}
}
