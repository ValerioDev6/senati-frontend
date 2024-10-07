import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IRolesResponse } from '../interfaces/roles.interface';
import { URL_ROLES_ALL } from '../config/api/config.url';

@Injectable({
	providedIn: 'root',
})
export class RolesService {
	constructor(private readonly _httpClient: HttpClient) {}

	getRolesData(page: number, limit: number, search: string = ''): Observable<IRolesResponse> {
		const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('search', search);
		return this._httpClient.get<IRolesResponse>(URL_ROLES_ALL, { params }).pipe(delay(1000));
	}
}
