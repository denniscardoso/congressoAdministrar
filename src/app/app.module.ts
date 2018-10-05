import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CongressistaPage } from '../pages/congressista/congressista';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { LoginPage } from '../pages/login/login';
import { TermosPage } from '../pages/termos/termos';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http'
import { ProgramacaoProvider } from '../providers/programacao/programacao';
import { CongressistaProvider } from '../providers/congressista/congressista';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CongressistaPage,
    ProgramacaoPage,
    LoginPage,
    TermosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CongressistaPage,
    ProgramacaoPage,
    LoginPage,
    TermosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CongressistaProvider,
    ProgramacaoProvider,
    BarcodeScanner,
    InAppBrowser
  ]
})
export class AppModule {}
