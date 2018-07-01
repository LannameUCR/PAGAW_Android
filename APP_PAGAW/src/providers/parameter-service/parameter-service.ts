import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
/*
Generated class for the ParameterServiceProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ParameterServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ParameterServiceProvider Provider');
  }


  getParameters() {
    return new Promise(resolve => {
      this.http.get('http://163.178.173.144:8080/estudiantes/PAGAW/getParametros.php').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
