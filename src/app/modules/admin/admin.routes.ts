import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const ADMIN_ROUTES: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: 'dashboard',
				loadChildren: () => import('../dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
				title: 'App - Dashboard',
				data: { breadcrumb: 'Dashboard' },
			},
			{
				path: 'personal',
				loadChildren: () => import('../personal/personal.routes').then((m) => m.PERSONAL_ROUTES),
				title: 'App - Personal',
				data: { breadcrumb: 'Personal' },
			},

			{
				path: 'roles',
				loadChildren: () => import('../roles/roles.routes').then((m) => m.ROLES_ROUTES),
				title: 'App - Roles',
				data: { breadcrumb: 'Roles' },
			},
			{
				path: 'categorias',
				loadChildren: () => import('../categorias/categorias.routes').then((m) => m.CATEGORIAS_ROUTES),
				title: 'App - Categorias',
				data: { breadcrumb: 'Categorias' },
			},
			{
				path: 'productos',
				loadChildren: () => import('../productos/productos.routes').then((m) => m.PRODUCTOS_ROUTES),
				title: 'App - Productos',
				data: { breadcrumb: 'Productos' },
			},
		],
	},
];
