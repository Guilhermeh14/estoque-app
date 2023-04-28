import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  url = 'http://localhost:3000/clientes';

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  create(cliente: Cliente) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getOne(id: number) {}

  update(id: number, cliente: Cliente) {}

  delete(cliente: Cliente) {}

  login() {}

  logout() {}

  exibirErro(erro: any): Observable<any> {
    const titulo = 'Erro na Conexão';
    const msg = `Verifique sua conexão`;

    this.presentAlert(titulo, msg);

    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
