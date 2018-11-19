import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Provedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provedor1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Provedor1Provider Provider');
  }
  obtenerDatos(){
    return this.http.get('https://localhost:3001/api/sensor')
  }

}
