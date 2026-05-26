import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Sobre },
  { path: 'sobre', redirectTo: '', pathMatch: 'full' },
  { path: 'portfolio', component: Portfolio },
  { path: 'contato', component: Contato },
];
