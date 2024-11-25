import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { URL_kARDEX_ALL } from '../config/api/config.url';
import { IKardexResponse } from '../interfaces/kardex.interface';

@Injectable({
	providedIn: 'root',
})
export class KardexService {
	constructor(private readonly _httpclient: HttpClient) {}

	getkardexData(page: number, limit: number, search: string = ''): Observable<IKardexResponse> {
		const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('search', search);
		return this._httpclient.get<IKardexResponse>(URL_kARDEX_ALL, { params }).pipe(delay(600));
	}

	deleteKardexById(id: string): Observable<boolean> {
		return this._httpclient.delete(`${URL_kARDEX_ALL}/${id}`).pipe(
			catchError(() => of(false)),
			map(() => true)
		);
	}
}
