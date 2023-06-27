import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
//import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class meuDogService {
  public url = "https://dog.ceo/api/breeds/image/random"
  public imagem = ''
  public result: any = {}
  constructor(
    private nav: NavController,
    private http: HttpClient,
    ) { }
    

}
