import { Component, OnInit } from '@angular/core';
import { Nutriologo, ServicioDietaService, antecedentesFam, datosPersonales } from '../servicios/servicio-dieta.service';
import { NotificationServiceService } from '../servicios/notification-service.service';


@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})

export class HistorialClinicoComponent implements OnInit {

datosPaciente : datosPersonales = new datosPersonales();
antecedenFam : antecedentesFam = new antecedentesFam();
fechaPerseada:any;
 loading:boolean;
 textoLoading:any;
 genero=["Femenino","Masculino","Otro"];
 estadoCivil=["Soltero/a","Casado/a","Unión libre","Separado/a","Divorciado/a","Viudo/a"];
 inforUser:any;
constructor(private servicioDietaService:ServicioDietaService,private notificationServiceService:NotificationServiceService){}


ngOnInit() {
  this.inforUser=JSON.parse(localStorage.getItem("info_user"));
   this.loading=false;
     this.datosPaciente.fechaCreacion=new Date();
    this.fechaPerseada= new Date().toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
 }

 agregarPaciente(){
  this.activarLoading('Guardando paciente...');
  let fechaNac=new Date(this.datosPaciente.fechaNacimiento);
  
  this.datosPaciente.fechaNacimiento=fechaNac;
  this.datosPaciente.idNutriologo=this.inforUser.id;
 console.log('paciente a guardar', this.datosPaciente)
this.servicioDietaService.postPaciente(this.datosPaciente).subscribe({
  next:(resp:any)=>{
    
    console.log('respuesta', resp)
    this.loading=false;
    this.datosPaciente={};
    this.notificationServiceService.createSuccessNotification('Paciente guardado','El paciente se guardó  con el numero de expediente: '+resp.id);
  },error:(error)=>{
    this.notificationServiceService.createWarningNotification('Paciente no guardado','No fue posible crear el paciente');
    this.loading=false;
  }
});
 }

  activarLoading(texto:any){
    this.textoLoading=texto;
    this.loading=true;

  }




}
