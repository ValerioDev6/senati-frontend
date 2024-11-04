/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ProductoService } from '../../../../core/services/productos.service';
import { IProductoResponse, Producto } from '../../../../core/interfaces/producto.interface';
@Component({
	selector: 'app-table-compras-modal',
	standalone: true,
	imports: [CommonModule, NzTableModule, NzButtonModule, FormsModule, NzPaginationModule],
	templateUrl: './table-compras-modal.component.html',
	styleUrl: './table-compras-modal.component.scss',
})
export class TableComprasModalComponent implements OnInit {
	private modalRef = inject(NzModalRef);
	private productoService = inject(ProductoService);

	search: string = '';
	products!: Producto[];
	loading = false;
	page: number = 1;
	limit: number = 10;
	total: number = 0;

	ngOnInit() {
		this.listarProductos();
	}

	listarProductos() {
		this.loading = true;
		this.productoService.getProductosData(this.page, this.limit, this.search).subscribe({
			next: (response: IProductoResponse) => {
				this.products = response.productos;
				this.total = response.info.total;
				this.loading = false;
			},
		});
	}
	searchProducts() {
		this.listarProductos();
	}

	onPageChange(page: number) {
		this.page = page;
		this.listarProductos();
	}

	selectProduct(product: any) {
		this.modalRef.close(product);
	}
}
