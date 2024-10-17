import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ReportesService {
	private apiUrl = 'http://localhost:3000/v1/api/basic-reports';

	constructor(private readonly _httpClient: HttpClient) {}

	downloadMarcasPDF(): Observable<Blob> {
		return this._httpClient.get(`${this.apiUrl}/marcas`, {
			responseType: 'blob',
		});
	}
}
