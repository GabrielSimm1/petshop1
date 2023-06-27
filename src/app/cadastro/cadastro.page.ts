import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  dadosCachorro = { nome: '', idade: '' };

  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};

  constructor(private nav: NavController, private http: HttpClient) {}

  gerar() {
    this.consultaApi().subscribe(
      (resp) => {
        this.result = resp;
        this.imagem = this.result.message;
      },
      (error) => {}
    );
  }

  consultaApi() {
    const header = {
      headers: new Headers().set('Content-Type', 'application/json'),
    };
    return this.http.get(this.url);
  }

 

  ngOnInit() {}
}
