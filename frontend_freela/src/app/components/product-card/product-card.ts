import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { Produto } from '../../services/produto.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
// Verifique se a palavra 'export' e o nome 'ProductCardComponent' estão corretos.
export class ProductCardComponent {
  @Input() item!: Produto;

  constructor(private modalService: ModalService) {}

  abrirDetalhes(): void {
    if (this.item) {
      this.modalService.openProductModal(this.item);
    }
  }
}

