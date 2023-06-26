import { TestBed } from '@angular/core/testing';

import { meuDogSerive } from './meuDog.Service';

describe('ApiService', () => {
  let service: meuDogSerive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(meuDogSerive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
