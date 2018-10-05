import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { ProgramacaoProvider } from "../../providers/programacao/programacao";

@IonicPage()
@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html',
})
export class ProgramacaoPage {

  public programacao;
  public loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProgramacaoProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

  }

  ionViewDidEnter() {

    this.loading = this.loadingCtrl.create({
      content: 'Pesquisando programação...'
    });

    this.loading.present();
    this.provider.getCongressista().then(result => {

      this.programacao = result;
      this.loading.dismiss();

    }, (err) =>{

      let toast = this.toastCtrl.create({
        message: "Ops! Tivemos um erro :(  [ "+err+" ]",
        duration: 5000,
        position: 'middle'
      });
      toast.present();
      this.loading.dismiss();

    });
  }

}
