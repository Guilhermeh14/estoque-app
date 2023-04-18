import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  create (cliente: Cliente){}

  getAll (){
    return this.http.get<Cliente[]>(this.url);
  }

  getOne (id: number){}

  update (id: number, cliente: Cliente){}

  delete (cliente: Cliente){}

  login (){}

  logout (){}
}
