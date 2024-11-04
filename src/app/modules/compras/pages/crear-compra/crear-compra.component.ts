/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { TableComprasModalComponent } from '../../components/table-compras-modal/table-compras-modal.component';
import CrearProductosComponent from '../../../productos/pages/crear-productos/crear-productos.component';
import { NzTableModule } from 'ng-zorro-antd/table';
interface PurchaseDetail {
	id: number;
	code: string;
	quantity: number;
	name: string;
	cost: number;
	total: number;
}
@Component({
	selector: 'app-crear-compra',
	standalone: true,
	imports: [FormsModule, NzIconModule, CommonModule, NzTableModule],
	templateUrl: './crear-compra.component.html',
	styleUrl: './crear-compra.component.scss',
	providers: [NzModalService],
})
export default class CrearCompraComponent {
	private modal = inject(NzModalService);
	private readonly _modal = inject(NzModalService);

	quantity: number = 1;
	purchaseDetails: PurchaseDetail[] = [];

	openProductModal() {
		this.modal
			.create({
				nzTitle: 'Seleccionar Producto',
				nzContent: TableComprasModalComponent,
				nzWidth: '75%',
				nzFooter: null,
				nzStyle: {
					top: '10px',
				},
			})
			.afterClose.subscribe((product) => {
				if (product) {
					this.addProductToDetails(product);
				}
			});
	}

	openAgregarProductosModal() {
		const modal = this._modal.create({
			nzTitle: 'Agregar Nuevo Producto',
			nzWidth: '70%',
			nzContent: CrearProductosComponent,
			nzFooter: null,
			nzStyle: {
				top: '10px',
			},
		});

		modal.afterClose.subscribe((result: boolean) => {
			if (result) {
				this._modal.closeAll();
			}
		});
	}

	addProductToDetails(product: any) {
		const total = this.quantity * product.price;

		const detail: PurchaseDetail = {
			id: Date.now(), // Temporal ID
			code: product.code,
			quantity: this.quantity,
			name: product.name,
			cost: product.price,
			total: total,
		};

		this.purchaseDetails = [...this.purchaseDetails, detail];
		this.quantity = 1; // Reset quantity
	}

	removeDetail(id: number) {
		this.purchaseDetails = this.purchaseDetails.filter((d) => d.id !== id);
	}

	savePurchase() {
		// Implementar la lógica de guardado
		console.log('Detalles de compra:', this.purchaseDetails);
	}
}
