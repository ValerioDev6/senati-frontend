import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaisResponse } from '../interfaces/pais.interface';
import { URL_PAIS_ALL } from '../config/api/config.url';

@Injectable({
	providedIn: 'root',
})
export class PaisService {
	constructor(private readonly _httpClient: HttpClient) {}

	getPaisesData(): Observable<IPaisResponse[]> {
		return this._httpClient.get<IPaisResponse[]>(URL_PAIS_ALL);
	}
}
