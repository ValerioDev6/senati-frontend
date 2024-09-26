import { Routes } from '@angular/router';

export const routes: Routes = [
 

  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    // canActivate: [isntLoggedGuard],
    loadChildren: () =>
      import('./modules/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'admin',
    // canActivate: [isLoggedGuard],
    loadChildren: () =>
      import('./modules/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
