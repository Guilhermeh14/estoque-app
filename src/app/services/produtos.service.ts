import { Observable, map, catchError, EMPTY } from 'rxjs';
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

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne() { }

  update() { }

  delete() { }

  exibirErro(erro: any): Observable<any>{
    if (erro['status'] == 404) {
      alert(`ERROR 404\n\nEndereço ${erro['url']} não encontrado!`)
    } else {
      alert('Deu erro')
    }
    console.log(erro);

    return EMPTY
  }
}
