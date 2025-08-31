import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Observable } from 'rxjs';
import { Produto } from '../../services/produto.service';

@Component({
  selector: 'app-product-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.css']
})
export class ProductDetailModalComponent {
  produto$: Observable<Produto | null>;
  quantidade = 1;

  constructor(
    private modalService: ModalService,
    private carrinhoService: CarrinhoService
  ) {
    this.produto$ = this.modalService.selectedProduct$;
  }

  fecharModal(): void {
    this.modalService.closeProductModal();
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarItem(produto.id, this.quantidade);
    this.fecharModal(); // Fecha o modal após adicionar
  }

  incrementar(): void {
    this.quantidade++;
  }

  decrementar(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }
}