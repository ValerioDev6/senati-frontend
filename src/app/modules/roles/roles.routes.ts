import { Routes } from '@angular/router';

export const ROLES_ROUTES: Routes = [
	{
		path: 'lista-roles',
		loadComponent: () => import('./pages/roles-lista/roles-lista.component'),
		data: {
			breadcrumb: 'Listado de Roles',
		},
	},
];
