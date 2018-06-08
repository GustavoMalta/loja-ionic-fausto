import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactFormService{
  public name: string = '';
  public phone: string = '';
  public email: string = '';
  public comment: string = '';
  private _headers;


  constructor(private http: HttpClient) {

  }
  
 public gravaDados(data) {

    console.log('Recebido: ' + JSON.stringify(data))
    console.log('name:' + this.name)
    this._headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return new Promise((resolve, reject) => {
            this.http.put('http://localhost:3000/arquivo/gravar', JSON.stringify(data), this._headers)
                .subscribe((result: any) => {
                    console.log(result);
                }, (err) => {
                    console.log(err);

                });
        });
  /*  this.http.put('http://localhost:3000/arquivo',JSON.stringify(data),);
                  .toPromise()
                    .then(res => data)
                    .then(data => { return data; });
                    */
     
  }

} 



