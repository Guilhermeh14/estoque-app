import { ClientesService } from './../../services/clientes.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.page.html',
  styleUrls: ['./create-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CreateClientePage {
  constructor(
    private clienteService: ClientesService
  ) {}

  criarCliente() {
    console.log('teste');
  }
}
