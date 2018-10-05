import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CongressistaPage } from '../pages/congressista/congressista';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { LoginPage } from '../pages/login/login';
import { TermosPage } from '../pages/termos/termos';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav:Nav;

  pages : Array<{title:string,component:any,icon:string}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      {title:'Meu Perfil', component: CongressistaPage, icon:'contact'},
      {title:'Programação', component: ProgramacaoPage, icon:'list'},
      {title:'Termos', component: TermosPage, icon:'checkmark-circle'}

    ];
  }
  openPage(pagina){
    this.nav.setRoot(pagina.component);
  }
  logOut(){
    localStorage.clear();
    this.nav.setRoot(HomePage);
  }
}
