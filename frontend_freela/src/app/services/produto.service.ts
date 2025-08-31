import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  custo: number;
  quantidadeEstoque: number;
  dataCriacao: string;
  imageUrl?: string; // <-- ADICIONE ESTA LINHA (o '?' torna o campo opcional)
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
}