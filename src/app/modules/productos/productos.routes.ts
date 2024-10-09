import { Routes } from '@angular/router';

export const PRODUCTOS_ROUTES: Routes = [
	{
		path: 'lista-productos',
		loadComponent: () => import('./pages/productos-page/productos-page.component'),
		data: {
			breadcrumb: 'Productos',
		},
	},
];
