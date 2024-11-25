import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ReportesPdfService {
	constructor(private readonly _httpClient: HttpClient) {}
	private readonly API_URL = environment.BACKEND_URL;

	downloadMarcasPDF(): Observable<Blob> {
		return this._httpClient.get(`${this.API_URL}/reports-pdf/marcas`, {
			responseType: 'blob',
		});
	}

	downloadProductosPDF(): Observable<Blob> {
		return this._httpClient.get(`${this.API_URL}/reports-pdf/productos`, {
			responseType: 'blob',
		});
	}

	downloadCategoriasPDF(): Observable<Blob> {
		return this._httpClient.get(`${this.API_URL}/reports-pdf/categorias`, {
			responseType: 'blob',
		});
	}

	downloadProductDetalles(id: string): Observable<Blob> {
		return this._httpClient
			.get(`${this.API_URL}/report-html/reporte/${id}`, {
				responseType: 'blob',
			})
			.pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		let errorMessage = 'Ocurrió un error al descargar el PDF';
		if (error.error instanceof ErrorEvent) {
			// Error del cliente
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// Error del servidor
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		return throwError(() => new Error(errorMessage));
	}
}
