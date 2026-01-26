import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/users/users.component')
            .then(m => m.UsersComponent)
      },
      {
        path: 'goals',
        loadComponent: () =>
          import('./pages/goals/goals.component')
            .then(m => m.GoalsComponent)
      },
      {
  path: 'sleep',
  loadComponent: () =>
    import('./pages/sleep/sleep.component')
      .then(m => m.SleepComponent)
},
      {
        path: 'calories',
        loadComponent: () =>
          import('./pages/calories/calories.component')
            .then(m => m.CaloriesComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component')
            .then(m => m.AboutComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component')
            .then(m => m.ContactComponent)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
