import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produto.service'; // Reutilizamos a interface

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // Controla a visibilidade do modal do carrinho
  private cartModalOpen = new BehaviorSubject<boolean>(false);
  public isCartModalOpen$ = this.cartModalOpen.asObservable();

  // Controla a visibilidade do modal de detalhes do produto
  private productModalOpen = new BehaviorSubject<boolean>(false);
  public isProductModalOpen$ = this.productModalOpen.asObservable();

  // Guarda os dados do produto que foi selecionado para exibir no modal
  private selectedProduct = new BehaviorSubject<Produto | null>(null);
  public selectedProduct$ = this.selectedProduct.asObservable();

  constructor() { }

  openCartModal(): void {
    this.cartModalOpen.next(true);
  }

  closeCartModal(): void {
    this.cartModalOpen.next(false);
  }

  openProductModal(produto: Produto): void {
    this.selectedProduct.next(produto);
    this.productModalOpen.next(true);
  }

  closeProductModal(): void {
    this.productModalOpen.next(false);
  }
}