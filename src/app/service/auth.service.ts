import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/User';
import { userLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
     
  entrar(userLogin: userLogin): Observable<userLogin> {
    return this.http.post<userLogin>("https://blogpessoalgabrielreis.herokuapp.com/swagger-ui/#/usuario-controller/AutenticationUsingPOST", userLogin)  
  }

  cadastrar(user: user): Observable<user>{
    return this.http.post<user>("https://blogpessoalgabrielreis.herokuapp.com/swagger-ui/#/usuario-controller/postUsuarioUsingPOST", user)
  }
}
