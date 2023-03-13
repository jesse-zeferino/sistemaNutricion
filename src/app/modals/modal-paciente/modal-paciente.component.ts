import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-paciente',
  templateUrl: './modal-paciente.component.html',
  styleUrls: ['./modal-paciente.component.css']
})
export class ModalPacienteComponent {

  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef,){

  }

  cerrarModal(){
  
    this.modalService.setDismissReason("cerrar");
    this.bsModalRef.hide();
   
  }
}
