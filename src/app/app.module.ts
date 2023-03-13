import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { DietasComponent } from './dietas/dietas.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalPacienteComponent } from './modals/modal-paciente/modal-paciente.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalDietaComponent } from './modals/modal-dieta/modal-dieta.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { EdadPipe } from './edad.pipe';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { ServicioDietaService } from './servicios/servicio-dieta.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PacientesComponent,
    ReportesComponent,
    AlimentosComponent,
    DietasComponent,
    HistorialClinicoComponent,
    NavbarComponent,
    ModalPacienteComponent,
    ModalDietaComponent,
    EdadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzGridModule,
    NzToolTipModule,
    NzIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzMenuModule,
    NzTableModule,
    ModalModule,
    FontAwesomeModule,
    NgSelectModule,
    NzFormModule,
    NzPopconfirmModule,
     HttpClientModule,
     NzSpinModule,
     NzAlertModule,
     NzNotificationModule
  ],
  providers: [ServicioDietaService  ,BsModalService, { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
