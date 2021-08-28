import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../model/User';
import { userLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: user = new user 
  confirmarSenha: string
  tipoUsuario: string 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0) 
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.targe.value 
  }

  tipoUser( event: any){
    this.tipoUsuario = event.targe.value 
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert("A senhas estão incorrertas.")
    } else{
      this.authService.cadastrar(this.user).subscribe((resp: user) => {
        this.user = resp
        this.router.navigate(["/entrar"]) 
        alert("Usuário cadastrado com sucesso!") 
      })
    }
  }

}
