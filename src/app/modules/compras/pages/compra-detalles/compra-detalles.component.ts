import { Component, OnInit } from '@angular/core';
import { IDetalleCompraResponse } from '../../../../core/interfaces/detalle-compra.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComprasService } from '../../../../core/services/compras.service';
import { finalize, switchMap } from 'rxjs';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-compra-detalles',
	standalone: true,
	imports: [NzSpinModule, CommonModule, RouterLink],
	templateUrl: './compra-detalles.component.html',
	styleUrl: './compra-detalles.component.scss',
})
export default class CompraDetallesComponent implements OnInit {
	compra?: IDetalleCompraResponse;
	loading = false;

	constructor(
		private route: ActivatedRoute,
		private comprasService: ComprasService
	) {}

	ngOnInit() {
		this.route.params
			.pipe(
				switchMap((params) => {
					const id = params['id'];
					return this.comprasService.getCompraById(id);
				}),
				finalize(() => {
					this.loading = false;
				})
			)
			.subscribe({
				next: (result) => {
					if (result) {
						this.compra = result;
						console.log(result);
					}
				},
			});
	}

	goBack() {}

	printCompra() {}
}
