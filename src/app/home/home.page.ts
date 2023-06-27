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
  public url = "https://dog.ceo/api/breeds/image/random"
  public imagem = ''
  public result: any = {}
  dadosCachorro = { nome: '', idade: '' }
  labelBotao = 'Cadastrar'

  constructor(
    private http: HttpClient,
    public nav: NavController,
    public mensagem: ToastController,
    private meuDogSerice: meuDogService
  ) { }
  gerar() {
    this.consultaApi().subscribe((resp) => {
      this.result = resp;
      this.imagem = this.result.message;
    },
      (error) => { }
    );
  }

  consultaApi() {
    const header = {
      headers: new Headers().set('Content-Type', 'application/json'),
    };
    return this.http.get(this.url);
  }

  cadastrar() {
    if (this.dadosCachorro.nome == '' || this.dadosCachorro.idade == '') {
      this.exibeToast('Preenche os campos necessários', 'danger')
    } else {
      this.salvamento();
      this.nav.navigateForward('cadastro')
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

  salvamento() {
      this.nav.navigateRoot('cadastro')
  }
}
