import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class ProgramacaoProvider {

  private url = "http://www.opusres.com/adm2017/programacao.php";
  private programacao;

  constructor(public http: Http) {

  }

  setCongressista(programacao){
    this.programacao = programacao;
  }

  public getCongressista(){
    return new Promise((resolve, reject) => {

      this.http.get(this.url).timeout(10000).subscribe(res => {

        resolve(res.json());

      }, (err) => {

        reject(err);

      })
    });
  }

}
