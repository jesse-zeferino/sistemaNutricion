import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-dieta',
  templateUrl: './modal-dieta.component.html',
  styleUrls: ['./modal-dieta.component.css']
})
export class ModalDietaComponent {

  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef){

  }
  categoriasLista=[1,2,3,4,5,6];
  categoria:any;

  agregarNota(){
    
  }
  guardarTarea(){

  }
 
  cerrarModal(){
    this.modalService.setDismissReason("cerrar");
    this.bsModalRef.hide();
  }
}
