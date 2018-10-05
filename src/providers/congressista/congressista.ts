import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class CongressistaProvider {

  private url = "http://www.opusres.com/adm2017/consultaUsuario.php";
  private congressista;
  private congressistas;

  constructor(public http: Http) {

  }

  getLink(){
    return new Promise((resolve, reject) => {

      this.http.get("http://www.opusres.com/adm2017/consultaLinkUsuario.php").timeout(10000).subscribe(res => {

          resolve(res.json());

      }, (err) => {

        reject(err);

      })
    });
  }

  setCongressista(congressista){
    this.congressista = congressista;
  }

  public getCongressista(inscricao,cpf){
    if(!cpf){
      let tmp = JSON.parse(localStorage.getItem('congressista'));
      cpf = ((String(tmp[0].cpf)).replace('-',''));
      cpf = cpf.replace('.','');
      cpf = cpf.replace('.','');
      inscricao = tmp[0].inscricao
    }
    let tmp = new Date();
    let url = this.url;
    url += "?insc="+inscricao;
    url += "&cpf="+cpf;
    url += "&tmp="+tmp.getTime();

    return new Promise((resolve, reject) => {

      this.http.get(url).timeout(10000).subscribe(res => {

        if(res['_body'] != ""){

          resolve(res.json());

        } else {

          resolve(null);

        }
      }, (err) => {

        reject(err);

      })
    });


  }

}
