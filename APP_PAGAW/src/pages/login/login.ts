import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public logginForm: FormGroup;
  public userName;
  public pwd;
  toastOptions: ToastOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServices: LoginProvider,
      public formBuilder: FormBuilder, public menuCtrl: MenuController, private toast: ToastController) {        
        this.logginForm = this.createForm();
        this.toastOptions = {
          message: 'El nombre de usuario o contraseña son incorrectos',
          duration: 3000
        };
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable( false )
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable( true )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private createForm() {
    return this.formBuilder.group({
      userName: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }


  validateLoggin() {
    if (this.logginForm.value.userName == "" || this.logginForm.value.pwd == "") {
      var toastValidation: ToastOptions;
      toastValidation = {
        message: 'Ingrese los datos',
        duration: 3000
      };
      this.toast.create(toastValidation).present();
    } else {
      this.loginServices.validateUser(this.logginForm.value.userName, this.logginForm.value.pwd)
      .then(data => {
        var loginResult : any;
        loginResult = data;
        var result = loginResult.Resultado[0].Resultado;        
        if (result == 1) {
          this.navCtrl.push(HomePage); 
        } else {
          this.toast.create(this.toastOptions).present();
        }   
      });      
    }
  }
}
