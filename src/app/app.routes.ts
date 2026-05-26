import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre', pathMatch: 'full' },
  { path: 'sobre', component: Sobre },
  { path: 'portfolio', component: Portfolio },
  { path: 'contato', component: Contato },
];
