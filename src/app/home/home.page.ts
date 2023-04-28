import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes() {
    this.clientesService.getAll().subscribe((dados) => {
      this.listaClientes = dados;
    })
  }
}
