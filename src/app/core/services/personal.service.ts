import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPersonalResponse } from '../interfaces/personal.interface';
import { IPersonalResponseData } from '../interfaces/persona-resposponse';

@Injectable({ providedIn: 'root' })
export class PersonalService {
	private readonly API_URL = `${environment.BACKEND_URL}/personal`;

	constructor(private readonly _httpClient: HttpClient) {}

	getPersonalData(page: number, limit: number, search: string = ''): Observable<IPersonalResponse> {
		const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString()).set('search', search);

		return this._httpClient.get<IPersonalResponse>(this.API_URL, { params }).pipe(delay(1000));
	}

	getPersonalById(id: string): Observable<IPersonalResponseData> {
		return this._httpClient.get<IPersonalResponseData>(`${this.API_URL}/${id}`);
	}
}
