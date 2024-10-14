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
import { PersonalService } from '../../../../core/services/personal.service';
import { IPersonalResponse, Personal } from '../../../../core/interfaces/personal.interface';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
	selector: 'app-personal-list',
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
	],
	templateUrl: './personal-list.component.html',
	styleUrl: './personal-list.component.scss',
})
export default class PersonalListComponent implements OnInit {
	private readonly _personalService = inject(PersonalService);

	personal: Personal[] = [];
	loading = false;
	search: string = '';
	page: number = 1;
	limit: number = 10;
	total: number = 0;

	ngOnInit(): void {
		this.loadDataPersonal();
	}

	loadDataPersonal(): void {
		this.loading = true;
		this._personalService.getPersonalData(this.page, this.limit, this.search).subscribe({
			next: (response: IPersonalResponse) => {
				this.personal = response.personal;
				this.total = response.info.total;
				this.loading = false;
				console.log(response);
			},
			error: (err) => {
				console.error('Error al cargar datos personales', err);
				this.loading = false;
			},
		});
	}

	searchTo(): void {
		this.page = 1; // Resetear a la primera página
		this.loadDataPersonal();
	}

	onPageChange(page: number): void {
		this.page = page;
		this.loadDataPersonal();
	}
	deletePersonal(personal: Personal): void {
		// Implementa la lógica de eliminación aquí
		console.log('Eliminar personal', personal);
	}
}
