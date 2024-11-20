import { Routes } from '@angular/router';

export const VENTAS_ROUTES: Routes = [
	{
		path: 'ventas-lista',
		loadComponent: () => import('./pages/ventas-lista/ventas-lista.component'),
		data: {
			breadcrumb: 'Listado Ventas',
		},
	},
];
