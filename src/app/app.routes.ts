import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { RestIntro } from './pages/rest-intro/rest-intro';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'rest', component: RestIntro },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
