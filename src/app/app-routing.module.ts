import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DietasComponent } from './dietas/dietas.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alimentos',
    component: AlimentosComponent,
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
  {
    path: 'dietas',
    component: DietasComponent,
  },
  {
    path: 'historial',
    component: HistorialClinicoComponent,
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
