import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemPedido } from './pedido.service'; // Reutilizamos a interface

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // BehaviorSubject guarda o valor atual e emite para novos inscritos
  private itensDoCarrinho = new BehaviorSubject<ItemPedido[]>([]);

  // Expomos os itens como um Observable, para que ninguém de fora possa modificá-lo
  public itens$ = this.itensDoCarrinho.asObservable();

  constructor() { }

  adicionarItem(produtoId: number, quantidade: number = 1): void {
    const itensAtuais = this.itensDoCarrinho.getValue();
    const itemExistente = itensAtuais.find(i => i.produtoId === produtoId);

    if (itemExistente) {
      // Se o item já existe, apenas incrementa a quantidade
      itemExistente.quantidade += quantidade;
    } else {
      // Se é um item novo, adiciona à lista
      itensAtuais.push({ produtoId, quantidade });
    }

    // Emite a nova lista de itens para todos que estão "ouvindo"
    this.itensDoCarrinho.next(itensAtuais);
    console.log("Carrinho atualizado:", this.itensDoCarrinho.getValue());
  }

  limparCarrinho(): void {
    this.itensDoCarrinho.next([]);
  }

  getItens(): ItemPedido[] {
    return this.itensDoCarrinho.getValue();
  }
}