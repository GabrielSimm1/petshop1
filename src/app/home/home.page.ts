import { Component } from '@angular/core';
import { meuDogService } from '../service/meuDog.Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  dadosCachorro = { 
  nome: '', 
  idade: '',
};
  labelBotao = 'Cadastrar'
  

  constructor(
    private http: HttpClient,
    public nav: NavController,
    public mensagem: ToastController,
    public meuDogService: meuDogService
  ) { }
 

  cadastrar() {
    if (this.dadosCachorro.nome == '' || this.dadosCachorro.idade == '') {
      this.exibeToast('Preenche os campos necessários', 'danger')
    } else {
      this.salvaDog();
      //this.nav.navigateForward('cadastro')
    }
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();

  }

   salvaDog() {
      this.meuDogService.salvarDog(
        this.dadosCachorro.nome, 
        this.dadosCachorro.idade)
        this.nav.navigateRoot('cadastro')
   }

   
}
