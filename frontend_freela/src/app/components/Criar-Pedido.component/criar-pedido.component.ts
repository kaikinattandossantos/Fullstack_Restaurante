import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoService, ItemPedido, PedidoPayload } from '../../services/pedido.service';
import { ProdutoService, Produto } from '../../services/produto.service';

@Component({
  selector: 'app-criar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  produtosDisponiveis: Produto[] = [];
  novoPedido: PedidoPayload = { nomeCliente: '', itens: [] };
  itemAtual: ItemPedido = { produtoId: 0, quantidade: 1, descricaoCliente: '' };

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProductos().subscribe({
      next: (data: Produto[]) => {
        this.produtosDisponiveis = data;
        console.log('Produtos carregados com sucesso!', data);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        alert('Não foi possível carregar a lista de produtos do servidor.');
      }
    });
  }

  adicionarItem(): void {
    if (this.itemAtual.produtoId > 0 && this.itemAtual.quantidade > 0) {
      this.novoPedido.itens.push({ ...this.itemAtual });
      this.itemAtual = { produtoId: 0, quantidade: 1, descricaoCliente: '' };
    }
  }

  enviarPedido(): void {
    if (this.novoPedido.nomeCliente && this.novoPedido.itens.length > 0) {
      this.pedidoService.criarPedido(this.novoPedido).subscribe({
        next: (resposta) => {
          console.log('Pedido criado com sucesso!', resposta);
          alert('Seu pedido foi enviado com sucesso!');
          this.novoPedido = { nomeCliente: '', itens: [] };
        },
        error: (erro) => {
          console.error('Erro ao criar pedido:', erro);
          alert('Houve um erro ao enviar seu pedido.');
        }
      });
    } else {
      alert('Por favor, preencha seu nome e adicione pelo menos um item.');
    }
  }
}

