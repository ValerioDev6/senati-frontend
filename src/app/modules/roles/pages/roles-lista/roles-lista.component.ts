import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { IRolesResponse, Role } from '../../../../core/interfaces/roles.interface';
import { RolesService } from '../../../../core/services/roles.service';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { CrearRolesComponent } from '../../components/crear-roles/crear-roles.component';

const NZ_MODULES = [
	NzInputModule,
	NzIconModule,
	NzButtonModule,
	NzTableModule,
	NzPaginationModule,
	NzFormModule,
	NzLayoutModule,
	NzToolTipModule,
	NzSelectModule,
	NzDropDownModule,
	NzDividerModule,
	NzCardModule,
	NzTagModule,
	NzIconModule,
];
@Component({
	selector: 'app-roles-lista',
	standalone: true,

	imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NZ_MODULES, NzModalModule],
	templateUrl: './roles-lista.component.html',
	styleUrl: './roles-lista.component.scss',
})
export default class RolesListaComponent implements OnInit {
	private readonly _rolesService = inject(RolesService);

	constructor(private readonly _modal: NzModalService) {}
	roles: Role[] = [];
	loading = false;
	search: string = '';
	page: number = 1;
	limit: number = 5;
	total: number = 0;
	ngOnInit(): void {
		this.loadDataRoles();
	}

	loadDataRoles(): void {
		this.loading = true;
		this._rolesService.getRolesData(this.page, this.limit, this.search).subscribe({
			next: (response: IRolesResponse) => {
				this.roles = response.roles;
				this.total = response.info.total;
				this.loading = false;
				console.log(response);
			},
			error: (err) => {
				console.error('Error al cargar roles', err);
				this.loading = false;
			},
		});
	}

	searchTo() {
		this.page = 1;
		this.loadDataRoles();
	}

	onPageChange(page: number) {
		this.page = page;
		this.loadDataRoles();
	}

	deleteRoles(roles: Role) {
		console.log('Elimianr rol: ', roles);
	}

	openAgregarRolModal(): void {
		this._modal.create({
			nzTitle: 'Agregar Nuevo Rol',
			nzContent: CrearRolesComponent,
			nzFooter: null,
			nzWidth: '600px',
		});
	}
}
