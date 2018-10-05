import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, LoadingController, ToastController, } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { CongressistaPage } from '../congressista/congressista';
import { ProgramacaoPage } from '../programacao/programacao';
import { TermosPage } from '../termos/termos';

import { CongressistaProvider } from '../../providers/congressista/congressista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav:Nav;

  img:string;
  link:string;
  loading;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public provider: CongressistaProvider,
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {

    let tmp = new Date();
    this.img = "http://www.opusres.com/adm2017/imgInicial.jpg?time="+tmp.getTime();

  }

  ionViewDidLoad(){
    this.loading = this.loadingCtrl.create({
      content: 'Pesquisando Congressista...'
    });
    this.loading.present();
    this.provider.getLink().then(link =>{

      this.loading.dismiss();
      this.link = link[0].link;

    }, error => {

      this.loading.dismiss();

    });
  }

  ionViewDidEnter(){

  }

  openPage(page){
    this.navCtrl.setRoot(page=='congressista'?CongressistaPage:ProgramacaoPage);
  }

  abreInscricoes(){
    let browser = this.iab.create(this.link,'_blank');
    browser.show();
  }


}
