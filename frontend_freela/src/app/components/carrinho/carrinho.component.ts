import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { PedidoService, PedidoPayload } from '../../services/pedido.service';
import { Observable } from 'rxjs';
import { ItemPedido } from '../../services/pedido.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  // 1. Apenas declaramos a propriedade e seu tipo aqui.
  itensDoCarrinho$: Observable<ItemPedido[]>;

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService
  ) {
    // 2. Inicializamos a propriedade DENTRO do construtor, onde 'carrinhoService' já existe.
    this.itensDoCarrinho$ = this.carrinhoService.itens$;
  }

  finalizarPedido(): void {
    const itens = this.carrinhoService.getItens();
    if (itens.length === 0) {
      // Usamos console.warn em vez de alert
      console.warn("Seu carrinho está vazio!");
      return;
    }

    const novoPedido: PedidoPayload = {
      // Futuramente, você pode pegar o nome de um campo de input
      nomeCliente: "Cliente da Loja",
      itens: itens
    };

    this.pedidoService.criarPedido(novoPedido).subscribe({
      next: (resposta) => {
        console.log("Pedido finalizado com sucesso!", resposta);
        this.carrinhoService.limparCarrinho();
      },
      error: (erro) => {
        console.error("Erro ao finalizar pedido:", erro);
      }
    });
  }
}