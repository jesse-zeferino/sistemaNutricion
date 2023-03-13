import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalPacienteComponent } from '../modals/modal-paciente/modal-paciente.component';
import { Subscription } from 'rxjs';
import { Nutriologo, ServicioDietaService, datosPersonales } from '../servicios/servicio-dieta.service';
import { NotificationServiceService } from '../servicios/notification-service.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit{
  public bsModalAddTask: BsModalRef;
  modalSubscription: Subscription;
  nzdata:any
  loading:boolean;
  buscarPacienteId:any;
  inforUser;
  loadingBuscar:boolean;
  pacientes:datosPersonales[]=[]
  constructor( private modalService: BsModalService, private servicioDietaService:ServicioDietaService,
              private notificationServiceService:NotificationServiceService   ){}
   
  ngOnInit(): void {
 
    this.inforUser=localStorage.getItem("info_user");
    console.log('inforUser',this.inforUser);
   this.loading=true;
   this.loadingBuscar=false;
     this.getPacientes();
  }

  getPacientes(){
    this.servicioDietaService.getPacientes().subscribe({
      next:(resp:any)=>{
         this.pacientes=resp.content;
         this.refreshStatus();
      },error:(error)=>{
        this.notificationServiceService.createWarningNotification('Pacientes no encontrados',"No fue posible obtener los pacientes")
      }
    });
 }

   keyUpSearchFilter(event): void {
   
    let keycode = event.keyCode;
    if (keycode == '13') {
      if(this.buscarPacienteId){
        this.loadingBuscar=true;
        this.getPacienteByID(this.buscarPacienteId);
      }else{
        this.getPacientes();
        this.loading=true;
       
      }
        
    }
}
 getPacienteByID(id:any){
       this.servicioDietaService.getPAcienteId(id).subscribe({
        next:(resp:any)=>{
          this.loadingBuscar=false;
          console.log('Paciete ID', resp);
          this.pacientes=[];
          this.pacientes.push(resp)
         
          this.refreshStatus();
        },error:(error)=>{
          this.notificationServiceService.createWarningNotification('Paciente no encontrado',"No fue posible encontrar al paciente")
          this.loadingBuscar=false;
          this.pacientes=[];
          this.refreshStatus();
        }
      });
 }

 eliminarPaciente(id:any){
  this.loading=true;
  this.servicioDietaService.deletePAciente(id).subscribe({
    next:(resp:any)=>{
     this.notificationServiceService.createSuccessNotification('Paciente eliminado',"El paciente se eliminó correctamente")
      this.getPacientes();
      
    },error:(error)=>{
      this.loading=false;
      this.notificationServiceService.createWarningNotification('Paciente no eliminado',"No fue posible eliminar al paciente")
    }
  });
 }
  refreshStatus(){
    this.loading=false;
    if(this.pacientes.length>0){
      this.nzdata=[''];
    }else{
      this.nzdata='';
    }
  }





  agregarNota(){
    var modalConfig: ModalOptions = {
      backdrop: "static",
      // initialState: {
      //   accion: 'crear'
      // }
    };
    this.bsModalAddTask= this.modalService.show(ModalPacienteComponent,modalConfig);
    this.modalSubscription = this.bsModalAddTask.onHidden.subscribe((result:any)=>{
      this.modalSubscription.unsubscribe();
      
       });
  }

}
