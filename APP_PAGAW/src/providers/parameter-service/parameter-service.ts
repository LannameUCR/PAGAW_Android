import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


/*
Generated class for the ParameterServiceProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ParameterServiceProvider {
  url:any;
  constructor(public http: HttpClient,public alertCtrl: AlertController) {
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
  updateParameters(rutaPR,rutaProduccion,rutaArchivo,registros,email,contrasena){
    this.url='http://163.178.173.144:8080/estudiantes/PAGAW/updateParametros.php?cantidadRegistros='+registros+'&rutaPruebas='+rutaPR+'&rutaProduccion='+rutaProduccion+'&rutaArchivos='+rutaArchivo+'&cuentaCorreo='+email+'&contrasena='+contrasena;
    console.log(this.url);
    this.http.get(this.url)
    .subscribe(Resultado => {

      let alert = this.alertCtrl.create({
        title: 'Update',
        subTitle: 'Successfully.',
        buttons: ['OK']
      });
      alert.present();


    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }
restartPArameter(){
  this.url='http://163.178.173.144:8080/estudiantes/PAGAW/restoreParametros.php';
  console.log(this.url);
  this.http.get(this.url)
  .subscribe(Resultado => {

    let alert = this.alertCtrl.create({
      title: 'Restore',
      subTitle: 'Successfully.',
      buttons: ['OK']
    });
    alert.present();


  }, error => {
    console.log(JSON.stringify(error.json()));
  });
}
}
