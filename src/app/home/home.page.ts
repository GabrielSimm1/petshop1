import { Component } from '@angular/core';
import { meuDogSerive } from '../service/meuDog.Service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private meuDogService: meuDogSerive) {
  }

}
