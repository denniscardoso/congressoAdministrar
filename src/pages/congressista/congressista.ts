import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController, Tabs } from 'ionic-angular';

import { CongressistaProvider } from '../../providers/congressista/congressista';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-congressista',
  templateUrl: 'congressista.html',
})
export class CongressistaPage {

  public congressista;
  public interval;
  public loading;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: CongressistaProvider,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public tabs:Tabs
  ) {

  }

  ionViewDidLoad(){}

  ionViewDidEnter(){
    this.loading = this.loadingCtrl.create({
      content: 'Pesquisando Congressista...'
    });
    this.loading.present();

    if(!localStorage.getItem('congressista')){

      this.loading.dismiss();
      this.openLogin();

    } else {

      this.provider.getCongressista(null,null).then(result =>{

        this.loading.dismiss();
        localStorage.setItem('congressista',JSON.stringify(result));
        this.congressista = JSON.parse(localStorage.getItem('congressista'));

      }, erro => {

        this.loading.dismiss();
        let toast = this.toastCtrl.create({
          message: "Ops! Tivemos um erro :(  [ "+erro+" ]",
          duration: 5000,
          position: 'top'
        });
        toast.present();
      });


    }
  }

  openLogin(){

    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
    modal.onDidDismiss(() => {

      if(!localStorage.getItem('congressista')){
        this.tabs.goToRoot(HomePage);
      } else {
        this.navCtrl.setRoot(CongressistaPage);
      }
    });

  }

  logOut(){
    localStorage.clear();
    this.tabs.goToRoot(HomePage);
  }

}
