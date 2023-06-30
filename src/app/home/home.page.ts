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

   ionViewDidEnter() {
    this.limpaDado();
   }
//Funcao para cadastrar os cachorros no app, caso os campos não forem preenchidos, aparecerá um alerta
  cadastrar() {
    if (this.dadosCachorro.nome == '' || this.dadosCachorro.idade == '') {
      this.exibeToast('Preenche os campos necessários', 'danger')
    } else {
      this.salvaDog();
      this.sucessToast("Cachorro cadastrado com sucesso!")
      this.nav.navigateForward('cadastro')
    }
  }
//Funcao para exibir mensagem de sucesso ou de alerta para o usuário
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
  //Mensagem de sucesso ao cadastrar um cachorro
  async sucessToast(message: string) {
    const toast = await this.mensagem.create({
      message: message,
      duration: 2000,
      position: 'top',
      animated: true,
      color: 'success'
    });

    toast.present();
  }
//Salva os cachorros cadastrado no LocalStorage
   salvaDog() {
      this.meuDogService.salvarDog(
        this.dadosCachorro.nome, 
        this.dadosCachorro.idade)
   }

   //limpa campos 'Nome' e 'Idade' ao clicar no botao 'Cadastrar'
   limpaDado(){
    this.labelBotao = 'Cadastrar';
    this.dadosCachorro.nome = '';
    this.dadosCachorro.idade = '';
   }

   
}
