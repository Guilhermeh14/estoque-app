import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListarProdutosPage {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe((dados) => {
      this.listaProdutos = dados;
    })
  }
}
