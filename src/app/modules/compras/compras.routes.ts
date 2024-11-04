import { Routes } from '@angular/router';

export const COMPRAS_ROUTES: Routes = [
	{
		path: 'lista-compra',
		loadComponent: () => import('./pages/compras-lista/compras-lista.component'),
		data: {
			breadcrumb: 'Compras',
		},
	},
	{
		path: 'crear-compra',
		loadComponent: () => import('./pages/crear-compra/crear-compra.component'),
		data: {
			breadcrumb: 'Crear Compra',
		},
	},

	{
		path: '**',
		redirectTo: 'lista-compra',
	},
];
