import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioDietaService } from '../servicios/servicio-dieta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  correo:any;
  password:any;

  constructor(private router: Router,private servicioDietaService :ServicioDietaService){

  }

  iniciarSesion(){

    console.log('Datos', this.correo, this.password);
    
    this.servicioDietaService.getNutriologos().subscribe({
      next:(resp:any)=>{
        console.log('nutriolodos',resp.content[0]);
        localStorage.setItem("info_user", JSON.stringify(resp.content[0]));
       // localStorage.getItem("info_user_logged");
       //  localStorage.removeItem("info_user_logged");
        this.router.navigate(['home']);
      },error:(error)=>{
        console.log('error al obtener nutriologos')
      }
    });
  }

 
}
