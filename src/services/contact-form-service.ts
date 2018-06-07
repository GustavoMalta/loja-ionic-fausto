import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactFormService{
  public name: string = '';
  public phone: string = '';
  public email: string = '';
  public comment: string = ''

  constructor(private http: HttpClient) {

  }
  
 gravaDados(data) {

    console.log('Recebido: ' + JSON.stringify(data))
    return this.http.put('http://localhost:3000/arquivo',JSON.stringify(data));
     
  }

} 



