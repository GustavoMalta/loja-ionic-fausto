import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactFormService{
  public name: string = '';
  public phone: string = '';
  public email: string = '';
  public comment: string = '';
  publixc 

  constructor(private http: HttpClient) {

  }

  gravaDados(data) {
     this.http.put('/home/debian',data);
     console.log('Recebido: ' + JSON.stringify(data))
  }

}
