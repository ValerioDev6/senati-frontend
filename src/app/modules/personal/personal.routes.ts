import { Routes } from "@angular/router";



export const PERSONAL_ROUTES: Routes = [
    {
        path: 'lista-personal',
        loadComponent: () => import('./pages/personal-list/personal-list.component'),
        data: {
            breadcrumb: 'Listado de Personal'
        }
    }
]