import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ReportesExcelService {
	constructor(private readonly _httpClient: HttpClient) {}

	descargarExcelMarcas(): Observable<Blob> {
		return this._httpClient.get('http://localhost:3000/v1/api/basic-reports-excel/marcas', {
			responseType: 'blob',
		});
	}

	descargarExcelProducto(): Observable<Blob> {
		return this._httpClient.get('http://localhost:3000/v1/api/basic-reports-excel/productos', {
			responseType: 'blob',
		});
	}
}
