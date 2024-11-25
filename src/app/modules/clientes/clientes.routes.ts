import { Routes } from '@angular/router';

export const CLIENTES_ROUTES: Routes = [
	{
		path: 'clientes-lista',
		loadComponent: () => import('./pages/clientes-lista/clientes-lista.component'),
		data: {
			breadcrumb: 'Clientes',
		},
	},
];
