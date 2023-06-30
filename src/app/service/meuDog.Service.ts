import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class meuDogService {
  dogs: any[] = [];
  key = 'cachorros';
  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};
  constructor(private nav: NavController, private http: HttpClient) {}
  
  
  //Funcao para gerar imagem aleatória de um cachorro consultando a API.
  gerar() {
    return new Promise<string>(async(resolve, reject)=>{
     try{
       const resp = await this.consultaApi().toPromise();
       this.result = resp;
       resolve(this.result.message);
     } catch (error){
       reject(error)
     }
    })
   }
 //funcao para fazer a consulta na API.
   consultaApi() {
     const header = {
       headers: new Headers().set('Content-Type', 'application/json'),
     };
     return this.http.get(this.url);
   }
//funcao para salvar o dog no LocalStorage
   async salvarDog(nome: string, idade: string) {
    const dados = {
      nome: nome,
      idade: idade,
      imagem: await this.gerar()
    };
    const values = localStorage.getItem(this.key);

    if (!values) {
      this.dogs.push(dados);
      localStorage.setItem(this.key, JSON.stringify(this.dogs));
    } else {
      const colecao: any[] = this.listar()!;
      colecao.push(dados);
      localStorage.setItem(this.key, JSON.stringify(colecao));
    }
  }
//funcao para adicionar cachorros na lista
  listar(){
    const values = localStorage.getItem(this.key);

    if(!values)
    return;

    const colecao: any[] = JSON.parse(values);
    return colecao;
  }
 //funcao para deletar os cachorros cadastrados
  deletar(params: any){
    const values = this.listar();
    const result = values?.filter(meuDogService => meuDogService.nome  !== params);
    
    localStorage.setItem(this.key, JSON.stringify(result));
  }


}
