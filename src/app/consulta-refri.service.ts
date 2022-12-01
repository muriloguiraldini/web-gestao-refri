import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRefriService {

  constructor(private http: HttpClient) { }


  cadastraRefrigerantes(codPedido: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*',
      })
    };
    return this.http.post<any>('https://tccqrcode.azurewebsites.net/criar', { codPedido: codPedido }, httpOptions);
  }


}
