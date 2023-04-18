import { Produto } from './../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  create() { }

  getAll() {
    return this.http.get<Produto[]>(this.url);
  }

  getOne() { }

  update() { }

  delete() { }
}
