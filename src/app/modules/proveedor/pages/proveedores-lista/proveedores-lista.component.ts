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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CommonModule } from '@angular/common';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { IProveedoresResponse, Proveedore } from '../../../../core/interfaces/proveedores.interface';
import { ProveedoresService } from '../../../../core/services/proveedores.service';
const NZ_MODULES = [
	NzInputModule,
	NzIconModule,
	NzButtonModule,
	NzTableModule,
	NzPaginationModule,
	NzFormModule,
	NzLayoutModule,
	NzSelectModule,
	NzDropDownModule,
	NzDividerModule,
	NzCardModule,
	NzTagModule,
	NzBreadCrumbModule,
	NzToolTipModule,
	NzPopconfirmModule,
	NzSpaceModule,
	NzModalModule,
];
@Component({
	selector: 'app-proveedores-lista',
	standalone: true,
	imports: [NZ_MODULES, RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
	templateUrl: './proveedores-lista.component.html',
	styleUrl: './proveedores-lista.component.scss',
})
export default class ProveedoresListaComponent implements OnInit {
	proveedores: Proveedore[] = [];
	loading = false;
	search: string = '';
	page: number = 1;
	limit: number = 10;
	total: number = 0;
	deletingMarcaId: string | null = null;

	constructor(
		private readonly _proveedorService: ProveedoresService,
		private readonly _modal: NzModalService,
		private readonly message: NzMessageService
	) {}
	ngOnInit(): void {
		this.loadDataMarcas();
	}

	loadDataMarcas() {
		this.loading = true;
		this._proveedorService.getProovedoresData(this.page, this.limit, this.search).subscribe({
			next: (response: IProveedoresResponse) => {
				this.proveedores = response.proveedores;
				this.total = response.info.total;
				this.loading = false;
			},
		});
	}

	searchTo() {
		this.page = 1;
		this.loadDataMarcas();
	}

	onPageChange(page: number) {
		this.page = page;
		this.loadDataMarcas();
	}

	getColor(estado: string): string {
		switch (estado) {
			case 'Activo':
				return 'green';
			case 'Inactivo':
				return 'red';
			case 'Suspendido':
				return 'orange';
			default:
				return 'default';
		}
	}
}
