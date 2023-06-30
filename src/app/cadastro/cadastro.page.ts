import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { meuDogService } from '../service/meuDog.Service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public dadosCachorro: any = [] = [];

  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};

  constructor(
    private nav: NavController,
    private http: HttpClient,
    public meuDogService: meuDogService,
    public alerta: AlertController
  ) {}

    ngOnInit() {}
  
    ionViewDidEnter() {
    this.carregaDados();
   }
  async voltar() {
    const voltando = await this.alerta.create({
      header: 'ATENÇÃO!',
      message: 'Deseja voltar?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            
            this.nav.navigateForward('/');
          },
        },
      ],
    });

    await voltando.present();
  }

  


  carregaDados() {
    if (this.meuDogService.listar()) {
      this.dadosCachorro = this.meuDogService.listar()!;
      console.log(this.dadosCachorro);
      if(this.dadosCachorro.lenght == 0){
        this.voltar();
      }
    }
  }

   deletar(params: string){
   this.meuDogService.deletar(params)
   this.carregaDados()
  }
  
  
}
