import { Routes } from '@angular/router';

export const PRODUCTOS_ROUTES: Routes = [
	{
		path: 'lista-productos',
		loadComponent: () => import('./pages/productos-page/productos-page.component'),
		data: {
			breadcrumb: 'Productos',
		},
	},

	{
		path: 'crear-producto',
		loadComponent: () => import('./pages/crear-productos/crear-productos.component'),
		data: {
			breadcrumb: 'Crear Productos',
		},
	},

	{
		path: 'actualizar/:id',
		loadComponent: () => import('./pages/actualizar-productos/actualizar-productos.component'),
		data: {
			breadcrumb: 'Actualizar Productos',
		},
	},

	{
		path: '**',
		redirectTo: 'lista-productos',
	},
];
