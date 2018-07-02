import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParameterServiceProvider } from '../../providers/parameter-service/parameter-service';
import { EditParametersPage } from '../../pages/edit-parameters/edit-parameters';
import { LoadingController } from 'ionic-angular';
import { Refresher }  from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  parameters: any[] = [];
  private editPage;

  constructor(public navCtrl: NavController,public parametrosServices:ParameterServiceProvider,public loadingCtrl: LoadingController) {

    this.getParameters();
    this.editPage = EditParametersPage;

  }

  getParameters() {
    this.parametrosServices.getParameters()
    .then(data => {
      this.parameters = data['Parametros'];

      console.log(this.parameters);
    });
  }
  recargar( refresher:Refresher ){

    setTimeout( ()=>{
      this.getParameters();
      refresher.complete();

    },1500)

  }

  editParameter(parameters:any){
    console.log(parameters);

    this.navCtrl.push(this.editPage, { parameters: parameters });
  }
  restartPArameter(parameter){
    this.parametrosServices.restartPArameter();
    this.parametrosServices.getParameters()
    .then(data => {
      this.parameters = data['Parametros'];

      console.log(this.parameters);
    });

  }
}
