import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import Swal from 'sweetalert2';
import { VentasService } from '../../../../core/services/ventas.service';
import { IVentasResponse, Venta } from '../../../../core/interfaces/ventas.interface';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TableProductoVentaModalComponent } from '../../components/table-producto-venta-modal/table-producto-venta-modal.component';

@Component({
	selector: 'app-ventas-lista',
	standalone: true,
	imports: [
		RouterModule,
		NzInputModule,
		NzIconModule,
		NzButtonModule,
		ReactiveFormsModule,
		NzTableModule,
		NzPaginationModule,
		NzFormModule,
		NzLayoutModule,
		NzToolTipModule,
		NzSelectModule,
		ReactiveFormsModule,
		FormsModule,
		NzDropDownModule,
		NzMessageModule,
		NzBreadCrumbModule,
		NzSpaceModule,
		CommonModule,
	],
	templateUrl: './ventas-lista.component.html',
	styleUrl: './ventas-lista.component.scss',
	providers: [NzModalService],
})
export default class VentasListaComponent implements OnInit {
	constructor(
		private readonly _ventasService: VentasService,
		private readonly message: NzMessageService,
		private readonly _modal: NzModalService
	) {}
	ventas: Venta[] = [];
	loading = false;
	search: string = '';
	page: number = 1;
	limit: number = 10;
	total: number = 0;

	ngOnInit(): void {
		this.loadVentaData();
	}

	loadVentaData() {
		this.loading = true;
		this._ventasService.getVentasData(this.page, this.limit, this.search).subscribe({
			next: (resposne: IVentasResponse) => {
				this.ventas = resposne.ventas;
				this.total = resposne.info.total;
				this.loading = false;
			},
			error: (error) => {
				console.log(error);
			},
		});
	}

	searchTo() {
		this.page = 1;
		this.loadVentaData();
	}
	onPageChange(page: number) {
		this.page = page;
		this.loadVentaData();
	}

	deleteVenta(venta: Venta) {
		Swal.fire({
			title: '¿Está seguro?',
			text: `Este proceso no es reversible, está a punto de eliminar su venta el ${venta.fecha_venta}`,
			showCancelButton: true,
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'No, cancelar',
			customClass: {
				popup: 'swal2-popup-custom',
				title: 'swal2-title-custom',
				htmlContainer: 'swal2-html-container-custom',
				confirmButton: 'swal2-confirm-button-custom',
				cancelButton: 'swal2-cancel-button-custom',
			},
			buttonsStyling: false,
			iconHtml:
				'<svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 text-red-500"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',
		}).then((result) => {
			if (result.isConfirmed) {
				this.loading = true;
				this._ventasService.deleteVentasById(venta.id_venta).subscribe({
					next: () => {
						this.loadVentaData();
						this.message.success('Venta eliminado con éxito');
					},
					error: () => {
						this.loading = false;
						this.message.error('Error al eliminar la venta');
					},
				});
			}
		});
	}

	openDetallesModal(venta: Venta) {
		const modal = this._modal.create({
			nzTitle: `Detalles de Compra realizada #${venta.created_at}`,
			nzContent: TableProductoVentaModalComponent,
			nzData: {
				id_venta: venta.id_venta,
			},
			nzWidth: '60%',
			nzFooter: null,
			nzStyle: {
				top: '10px',
			},
		});
		modal.afterClose.subscribe((result: boolean) => {
			if (result) {
				this.loadVentaData();
			}
		});
	}
}
