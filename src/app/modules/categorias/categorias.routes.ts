import { Routes } from "@angular/router";



export const CATEGORIAS_ROUTES: Routes = [
    {
        path: 'lista-categorias',
        loadComponent: () => import('./pages/categoria-list/categoria-list.component'),
        data: {
            breadcrumb: 'Listado de Categorias'
        }
    }
] 