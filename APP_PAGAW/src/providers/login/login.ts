import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  validateUser(userName, password) {
    return new Promise(resolve => {
      this.http.get('http://163.178.173.144:8080/estudiantes/PAGAW/validarUsuario.php?usuario='+userName+'&contrasena='+password)
        .subscribe(data => {
          resolve(data);          
      }, err => {
        console.log(err);
      });
    });
  }
}
