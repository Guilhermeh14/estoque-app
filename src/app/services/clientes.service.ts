import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  create (cliente: Cliente){}

  getAll (): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne (id: number){}

  update (id: number, cliente: Cliente){}

  delete (cliente: Cliente){}

  login (){}

  logout (){}

  exibirErro(erro: any): Observable<any> {
    alert('Deu erro');
    console.log(erro);

    return EMPTY;
  }
}
