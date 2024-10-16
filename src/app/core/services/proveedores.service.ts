import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IProveedoresResponse } from '../interfaces/proveedores.interface';
import { URL_PROVEEDORES_ALL } from '../config/api/config.url';

@Injectable({
	providedIn: 'root',
})
export class ProveedoresService {
	constructor(private readonly _httpClient: HttpClient) {}

	getProovedoresData(page: number, limit: number, search: string = ''): Observable<IProveedoresResponse> {
		const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('search', search);
		return this._httpClient.get<IProveedoresResponse>(URL_PROVEEDORES_ALL, { params }).pipe(delay(1000));
	}
}
