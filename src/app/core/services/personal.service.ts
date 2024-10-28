import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPersonalResponse } from '../interfaces/personal.interface';
import { IPersonalResponseData } from '../interfaces/persona-resposponse';
import { IPersonalSubmit } from '../interfaces/personas.interface';
import { Personal } from '../interfaces/login-response.interface';

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

	updatePersonal(data: Personal): Observable<IPersonalSubmit> {
		return this._httpClient.patch<IPersonalSubmit>(`${this.API_URL}/${data.id_personal}`, data);
	}
	createPersonal(data: IPersonalSubmit): Observable<IPersonalSubmit> {
		return this._httpClient.post<IPersonalSubmit>(`${this.API_URL}`, data);
	}

	deletePersonalById(id: string): Observable<boolean> {
		return this._httpClient.delete(`${this.API_URL}/${id}`).pipe(
			catchError(() => of(false)),
			map(() => true)
		);
	}
}
