import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/environments/environment';
export class Dieta {

  tipoComida?: any;
  categoriaComida?: any;
  alimento?: any;
  porcion?: any;
   
}
export class DietasPaciente {
  paciente?: any;
  fecha?: any;
  NoExpediente?: any;
  dietas?:any
  }

  export class datosPersonales{
    correoElectronico?:any;
direccion?:any;
estadoCivil?:any;
fechaCreacion?:any;
fechaNacimiento?:any;
genero?:any;
id?:any;
motivoConsulta?:any;
nombreCompleto?:any;
ocupacion?:any;
telefono?:any;
idNutriologo?:any;
  }
  export class antecedentesFam{
    obecidad?: any;
    diabetes?: any;
    hta?: any;
    corazon?: any;
    renales?: any;
    cancer?: any;
    ht?: any;
    respiratorias?: any;
    otros?: any;
  }

  export class padecimientosAct{
    obecidad?: any;
    diabetes?: any;
    hta?: any;
    htg?: any;
    ulcera?: any;
    gastritis?: any;
    reflujo?: any;
    renales?: any;
    colitis?: any;
    anorexia?: any;
    bulimia?: any;
    otros?: any;

  }
  export class sintomasActuales{
    diarrea?: any;
    acidez?: any;
    nauseas?: any;
    vomito?: any;
    masticacion?: any;
    estreñimiento?: any;
    mareos?: any;
    deglucion?: any;
    otros?: any;

  }
  export class estiloVida{
    estilo?: any;
    deporte?: any;
    bebidas?: any;
    fumar?: any;
    cafe?: any;
    otros?: any;

  }

  export class habitosAlimentarios{
    apetito?: any;
    disfrutaComer?: any;
    consumoAlimentos?: any;
    comidas?: any;
    saltarComidas?: any;
    mismaHora?: any;
    entreComidas?: any;
    tipoAlimentos?: any;
    horaHambre?: any;
    alimentosMalestar?: any;
    sal?: any;
    vasosAgua?: any;
    vasosJugo?: any;
    vasosRefresco?: any;
    azucar?: any;
    tipoGrasa?: any;
    dietaEspecial?: any;


  }
  export class ConsumoAlimentos{
    leche?: any;
    yogurth?: any;
    atun?: any;
    pescado?: any;
    pechugaPollo?: any;
    piernaMuslo?: any;
    retazoPollo?: any;
    res?: any;
    puerco?: any;
    chicharron?: any;
    panela?: any;
    aoxaca?: any;
    añejo?: any;
    embutidos?: any;
    huevo?: any;
    tocino?: any;
    cremaAcida?: any;
    mayonesa?: any;
    tortillas?: any;
    panBlanco?: any;
    panDulce?: any;
    tamal?: any;
    verduras?: any;
    verdurasVerdes?: any;
    frutas?: any;
    leguminosas?: any;
    
  }

  export class Nutriologo{
      id?: any;
      nombreCompleto?: any;
 fechaNacimiento?: any;
       fechaCreacion?: any;
 direccion?: any;
      telefono?: any;
      correoElectronico?: any;
      password?: any;
      cedula?: any;
      nombreClinica?: any;
  }


@Injectable({
  providedIn: 'root'
})
export class ServicioDietaService {

 public nutriologos:Nutriologo[]=[];
  constructor(public httpClient: HttpClient) { }
  
   private endPointPacientes =  '/pacientes'
   private endPointNutriologos =  '/nutriologos';
   getNutriologos(){
    return this.httpClient.get(environment.api_url+this.endPointNutriologos);
   }

  getPacientes(){
   return this.httpClient.get(environment.api_url+this.endPointPacientes);
  }
  getPAcienteId(id:any){
    return this.httpClient.get(environment.api_url+this.endPointPacientes+"/"+id);
     
  }

  postPaciente(paciente:any){
    return this.httpClient.post(environment.api_url+this.endPointPacientes,paciente);
   }

   deletePAciente(id:any){
    return this.httpClient.delete(environment.api_url+this.endPointPacientes+"/"+id);
   }
}
