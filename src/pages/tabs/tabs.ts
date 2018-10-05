import { Component } from '@angular/core';


import { CongressistaPage } from '../congressista/congressista';
import { ProgramacaoPage } from '../programacao/programacao';
import { TermosPage } from '../termos/termos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  congressista = CongressistaPage;
  programacao = ProgramacaoPage;
  termos = TermosPage;
  home = HomePage;

  constructor() {
    
  }


}
