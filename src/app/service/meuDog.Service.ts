import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class meuDogSerive {
private url: string = "https://dog.ceo/api/breeds/image/random"

  constructor(private http: HttpClient) { }
}
