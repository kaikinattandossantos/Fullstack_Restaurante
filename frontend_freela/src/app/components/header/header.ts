import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Observable } from 'rxjs';
import { ItemPedido } from '../../services/pedido.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // Apenas declaramos a propriedade e seu tipo aqui
  itensNoCarrinho$: Observable<ItemPedido[]>;

  constructor(
    private modalService: ModalService,
    private carrinhoService: CarrinhoService
  ) {
    // Inicializamos a propriedade DENTRO do construtor
    this.itensNoCarrinho$ = this.carrinhoService.itens$;
  }

  abrirCarrinho(): void {
    this.modalService.openCartModal();
  }
}
