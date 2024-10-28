import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ProveedoresService } from '../../../../core/services/proveedores.service';

@Component({
	selector: 'app-crear-proveedor',
	standalone: true,
	imports: [
		CommonModule,
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
		FormsModule,
		NzDropDownModule,
		NzDividerModule,
		NzCardModule,
		NzTagModule,
		NzIconModule,
		NzBreadCrumbModule,
		NzModalModule,
		NzMessageModule,
		NzSpinModule,
	],
	templateUrl: './crear-proveedor.component.html',
	styleUrl: './crear-proveedor.component.scss',
})
export class CrearProveedorComponent implements OnInit {
	private readonly _proveedorService = inject(ProveedoresService);

	ngOnInit(): void {
		console.log('HOla');
	}

	constructor(
		private readonly message: NzMessageService,
		private readonly _modal: NzModalService
	) {}
}
