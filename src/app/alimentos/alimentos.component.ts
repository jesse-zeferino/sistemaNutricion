import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalPacienteComponent } from '../modals/modal-paciente/modal-paciente.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent {
  public bsModalAddTask: BsModalRef;
  modalSubscription: Subscription;
  constructor( private modalService: BsModalService){}

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
