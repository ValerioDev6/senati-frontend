import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
	selector: 'app-crear-roles',
	standalone: true,
	imports: [CommonModule, NzButtonModule, NzInputModule, NzFormModule, NzIconModule],
	templateUrl: './crear-roles.component.html',
	styleUrl: './crear-roles.component.scss',
})
export class CrearRolesComponent {
	constructor(private modalRef: NzModalRef) {}

	guardarRol(event?: Event): void {
		if (event) {
			event.preventDefault();
		}
		console.log('Rol guardado');
		this.modalRef.close();
	}

	cancelar(event?: Event): void {
		if (event) {
			event.preventDefault();
		}
		this.modalRef.close();
	}
}
