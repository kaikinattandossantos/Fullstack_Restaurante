import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { PedidoService, PedidoPayload } from '../../services/pedido.service';
import { Observable } from 'rxjs';
import { ItemPedido } from '../../services/pedido.service';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  itensDoCarrinho$: Observable<ItemPedido[]>;

  constructor(
    private modalService: ModalService,
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService
  ) {
    this.itensDoCarrinho$ = this.carrinhoService.itens$;
  }

  fecharModal(): void {
    this.modalService.closeCartModal();
  }

  finalizarPedido(): void {
    const itens = this.carrinhoService.getItens();
    if (itens.length === 0) {
      console.warn("Seu carrinho está vazio!");
      return;
    }

    const novoPedido: PedidoPayload = {
      nomeCliente: "Cliente da Loja",
      itens: itens
    };

    this.pedidoService.criarPedido(novoPedido).subscribe({
      next: (resposta) => {
        console.log("Pedido finalizado com sucesso!", resposta);
        this.carrinhoService.limparCarrinho();
        this.fecharModal();
      },
      error: (erro) => {
        console.error("Erro ao finalizar pedido:", erro);
      }
    });
  }
}
