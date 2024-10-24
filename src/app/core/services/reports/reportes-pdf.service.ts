import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ReportesPdfService {
	constructor(private readonly _httpClient: HttpClient) {}

	downloadMarcasPDF(): Observable<Blob> {
		return this._httpClient.get('http://localhost:3000/v1/api/basic-reports/marcas', {
			responseType: 'blob',
		});
	}

	downloadProductosPDF(): Observable<Blob> {
		return this._httpClient.get('http://localhost:3000/v1/api/basic-reports/productos', {
			responseType: 'blob',
		});
	}
}
