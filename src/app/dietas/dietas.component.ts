import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ModalDietaComponent } from '../modals/modal-dieta/modal-dieta.component';
import { Dieta, DietasPaciente } from '../servicios/servicio-dieta.service';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css']
})
export class DietasComponent implements OnInit {
  
  pacientes=['Jesse Zeferino Rodriguez'];
  tiposComida=['Almuerzo',"Comida", "Cena","Colación"];
  categoriasComida=['Fruta',"Verdura","Origen Animal","Legumbre"];
  alimentos=['Manzana',"Naranja","Tocino","Queso"];
  categoria:any;
  dietasPaciente:any;
  loading: boolean = false;
  nzdata:any
  public bsModalAddTask: BsModalRef;
  modalSubscription: Subscription;

  constructor(private modalService: BsModalService){}
  ngOnInit(): void {
 this.fecha = new Date();
    this.cargarDietas();
    console.log('iniciar');
   
  }
  refreshStatus(){
    console.log('refresxar')
    if(this.dietas.length>0){
      this.nzdata=[''];
    }else{
      this.nzdata='';
    }
  }
  cargarDietas(){
    this.refreshStatus();
  }

  paciente:any;
  tipoComida:any;
  categoriaComida:any;
  alimento:any;
  porcion:any;
  fecha:any;

  dietas:Dieta[]=[];
 
  agregardieta(){
    
    let dieta={
     
  tipoComida:this.tipoComida,
  categoriaComida:this.categoriaComida,
  alimento:this.alimento,
  porcion:this.porcion, 

    }
    console.log('dieta', dieta)
    this.dietas.push(dieta);
    this.refreshStatus();
  }
  sort(sort: any){

  }
  guardarDieta(){

    let dietaGuardar:DietasPaciente={
      paciente:this.paciente,
      fecha:this.fecha,
      NoExpediente:this.paciente,
      dietas:this.dietas,

    }
    console.log('dietas', dietaGuardar);
  }
}
