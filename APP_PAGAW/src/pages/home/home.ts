import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParameterServiceProvider } from '../../providers/parameter-service/parameter-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 parameters: any[] = [];
  constructor(public navCtrl: NavController,public parametrosServices:ParameterServiceProvider) {
this.getParameters();
  }
  getParameters() {
      this.parametrosServices.getParameters()
      .then(data => {
        this.parameters = data['Parametros'];
        console.log(this.parameters);
      });
    }
}
