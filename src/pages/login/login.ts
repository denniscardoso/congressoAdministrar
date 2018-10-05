import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';

import { CongressistaProvider } from '../../providers/congressista/congressista';
import { CongressistaPage } from '../congressista/congressista';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  congressista = {"inscricao":"","cpf":""};
  public loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: CongressistaProvider,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
    public loadingCtrl: LoadingController
  ) {

    this.loading = this.loadingCtrl.create({

      content: 'Pesquisando Congressista...'

    });

  }

  ionViewDidLoad() {}

  cancelar(){
    this.viewCtrl.dismiss();
  }

  async leitor(){
    this.loading.present();
    this.barcodeScanner.scan().then((data) => {

      let parametros = data.text.split(";");
      if(parametros[2] == "congressista"){

        let tmp = parametros[1];
        let cpf = tmp.replace('-','');
        cpf = cpf.replace('.','');
        cpf = cpf.replace('.','');

        this.provider.getCongressista(parametros[0],cpf).then(result =>{

          this.verificaRetorno(result);

        }, (erro) => {

          this.loading.dismiss();
          this.viewCtrl.dismiss();
          this.msgToast("Ops! Algo deu errado ["+erro+"]", 4000,'middle');

        });

      } else {

        this.loading.dismiss();
        this.viewCtrl.dismiss();
        this.msgToast("Ops! QRCode inválido :(", 4000,'middle');

      }


    }, (err) => {

      this.loading.dismiss();
      this.viewCtrl.dismiss();
      this.msgToast(err,3000,'top');

    });

  }

  pesquisarCongressista(){

    if(this.congressista.cpf != ""){
        this.loading.present();
        this.provider.getCongressista(this.congressista.inscricao,this.congressista.cpf).then(result =>{

          this.verificaRetorno(result);

        }, (erro) => {

          this.loading.dismiss();
          this.viewCtrl.dismiss();
          this.msgToast("Ops! Algo deu errado ["+erro+"]", 4000,'middle');

        });
    } else {

      this.msgToast("Ops! Preencha seu cpf.",4000,'top');

    }


  }

  private verificaRetorno(result){

    if(result != null){

      localStorage.clear();
      localStorage.setItem('congressista',JSON.stringify(result));
      this.loading.dismiss();
      this.viewCtrl.dismiss();

    } else {

      this.loading.dismiss();
      this.viewCtrl.dismiss();
      this.msgToast("Ops! Nenhum congressista encontrado :(",4000,'middle');

    }

  }

  private msgToast(msg:string,duration:number,position:string){

    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: position
    });
    toast.present();

  }

}
