import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para definir a estrutura de um item do pedido (boa prática)
export interface ItemPedido {
  produtoId: number;
  quantidade: number;
  descricaoCliente?: string; // O '?' torna o campo opcional
}

// Interface para definir a estrutura do corpo da requisição
export interface PedidoPayload {
  nomeCliente: string;
  itens: ItemPedido[];
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  // A URL base da sua API de pedidos (ajuste se for diferente)
  private baseUrl = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}

  /**
   * Busca a lista de todos os pedidos.
   */
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  /**
   * Cria um novo pedido.
   * @param novoPedido O objeto contendo os dados do pedido a ser enviado.
   */
  criarPedido(novoPedido: PedidoPayload): Observable<any> {
    // Envia uma requisição POST para a URL base com os dados do pedido
    return this.http.post(this.baseUrl, novoPedido);
  }
}

