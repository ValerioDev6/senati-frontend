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
import { KardexService } from '../../../../core/services/kardex.service';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { IKardexResponse, Kardex } from '../../../../core/interfaces/kardex.interface';

@Component({
	selector: 'app-kardex-lista',
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
		NzTagModule,
	],
	templateUrl: './kardex-lista.component.html',
	styleUrl: './kardex-lista.component.scss',
})
export default class KardexListaComponent implements OnInit {
	constructor(
		private readonly _kardexService: KardexService,
		private readonly message: NzMessageService
	) {}
	kardex: Kardex[] = [];
	loading = false;
	search: string = '';
	page: number = 1;
	limit: number = 10;
	total: number = 0;

	ngOnInit(): void {
		this.loadKardexData();
	}

	loadKardexData() {
		this.loading = true;
		this._kardexService.getkardexData(this.page, this.limit, this.search).subscribe({
			next: (resposne: IKardexResponse) => {
				this.kardex = resposne.kardex;
				this.total = resposne.info.total;
				this.loading = false;
			},
			error: (error: unknown) => {
				console.log(error);
			},
		});
	}

	searchTo() {
		this.page = 1;
		this.loadKardexData();
	}
	onPageChange(page: number) {
		this.page = page;
		this.loadKardexData();
	}

	deleteKardex(kardex: Kardex) {
		Swal.fire({
			title: '¿Está seguro?',
			text: `Este proceso no es reversible, está a punto de eliminar su movimiento realizado el ${kardex.fecha_movimiento}`,
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
				this._kardexService.deleteKardexById(kardex.id_kardex).subscribe({
					next: () => {
						this.loadKardexData();
						this.message.success('Movimiento  eliminado con éxito');
					},
					error: () => {
						this.loading = false;
						this.message.error('Error al eliminar el Movimiento');
					},
				});
			}
		});
	}
}
