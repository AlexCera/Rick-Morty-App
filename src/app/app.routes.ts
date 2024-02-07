import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./pages/character/character.page').then( m => m.CharacterPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
];
