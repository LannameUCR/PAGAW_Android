import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParameterServiceProvider } from '../../providers/parameter-service/parameter-service';
import { HomePage } from '../home/home';

/**
* Generated class for the EditParametersPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-edit-parameters',
  templateUrl: 'edit-parameters.html',
})
export class EditParametersPage {
  parameters;
  rutaPR:string="";
  rutaProduccion:string="";
  rutaArchivo:string="";
  registros:string="";
  email:string="";
  contrasena:string="";
  private home;

  constructor(public navCtrl: NavController, public navParams: NavParams,public parametrosServices:ParameterServiceProvider) {
    this.parameters = navParams.data.parameters;
    this.rutaProduccion=this.parameters.ruta_absoluta_Sproduccion;
    this.rutaArchivo=this.parameters.ruta_absoluta_Sarchivos;
    this.registros=this.parameters.cantidad_registros;
    this.email=this.parameters.cuenta_correo;
    this.contrasena=this.parameters.contrasena;
    this.rutaPR=this.parameters.ruta_absoluta_Spruebas;
    this.home = HomePage;

    console.log(this.parameters);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditParametersPage');
  }
  editParameter(){
    this.parametrosServices.updateParameters(this.rutaPR,this.rutaProduccion,this.rutaArchivo,this.registros,this.email,this.contrasena);

        this.navCtrl.pop(this.home);
  }

}
