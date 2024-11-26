import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../../../../core/services/proveedores.service';
import { ReportesPdfService } from '../../../../core/services/reports/reportes-pdf.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, switchMap } from 'rxjs';
import { IProveedorByIDResponseIndividual } from '../../../../core/interfaces/proveedor-by-id.interface';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
	selector: 'app-info-proveedor',
	standalone: true,
	imports: [CommonModule, NzSpinModule, NzIconModule, NzBreadCrumbModule],
	templateUrl: './info-proveedor.component.html',
	styleUrl: './info-proveedor.component.scss',
})
export default class InfoProveedorComponent implements OnInit {
	proveedor!: IProveedorByIDResponseIndividual;
	loading = true;
	isDownloading = false;

	ngOnInit() {
		this.loadingDataProducto();
	}

	constructor(
		private readonly route: ActivatedRoute,
		private readonly _routes: Router,
		private readonly proveedorService: ProveedoresService,
		private readonly _reportPdfService: ReportesPdfService,
		private readonly message: NzMessageService
	) {}

	private loadingDataProducto() {
		this.loading = false;
		this.route.params
			.pipe(
				switchMap((params) => {
					const id = params['id'];
					return this.proveedorService.getProveedorDetallesById(id);
				}),
				finalize(() => {
					this.loading = false;
				})
			)
			.subscribe({
				next: (resp) => {
					if (resp) {
						this.proveedor = resp;
					}
				},
			});
	}

	back() {
		this._routes.navigate(['/admin/productos']);
	}

	edit() {
		if (this.proveedor.id_proveedor) {
			this._routes.navigate(['/admin/proveedor/actualizar', this.proveedor.id_proveedor]);
		}
	}
}
