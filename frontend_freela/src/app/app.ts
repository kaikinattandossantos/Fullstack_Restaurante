import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Importe todos os componentes visuais que o app.html utiliza
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { RestaurantHeaderComponent } from './components/restaurant-header/restaurant-header';
import { MenuSectionComponent } from './components/menu-section/menu-section';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

// Importe os serviços que este componente vai usar
import { ModalService } from './services/modal.service';
import { ProdutoService, Produto } from './services/produto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RestaurantHeaderComponent,
    MenuSectionComponent,
    ProductDetailModalComponent, // Garanta que os modais estão nos imports
    CartModalComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  // Variáveis para controlar a visibilidade dos modais no HTML
  // O '$' no final é uma convenção para indicar que são Observables (fluxos de dados)
  public isProductModalOpen$: Observable<boolean>;
  public isCartModalOpen$: Observable<boolean>;

  // Esta variável guardará os dados dos produtos que vêm do backend
  menuData: any[] = [];

  constructor(
    // Injeção de dependência: O Angular fornece os serviços necessários aqui
    private modalService: ModalService,
    private produtoService: ProdutoService
  ) {
    // Conecta as variáveis locais aos Observables do ModalService.
    // Agora, sempre que o serviço for alterado, estas variáveis serão atualizadas.
    this.isProductModalOpen$ = this.modalService.isProductModalOpen$;
    this.isCartModalOpen$ = this.modalService.isCartModalOpen$;
  }

  ngOnInit(): void {
    // Quando o componente é iniciado, chama a função para buscar os produtos.
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProductos().subscribe({
      next: (produtosDoBackend: Produto[]) => {
        // Mapeia a lista de produtos para a estrutura que o template espera
        this.menuData = [
          {
            title: 'Destaques',
            // Adiciona a URL da imagem placeholder para cada produto
            items: produtosDoBackend.map(p => ({
              ...p,
              imageUrl: 'https://placehold.co/300x150/cccccc/333333?text=Produto'
            }))
          }
        ];
      },
      error: (erro) => console.error("Falha ao buscar produtos", erro)
    });
  }

  // Dados estáticos para o cabeçalho do restaurante
  restaurantData = {
    name: 'Nome do Restaurante',
    rating: 4.6,
    bannerUrl: 'https://placehold.co/1200x200/cccccc/333333?text=Banner',
    logoUrl: 'https://placehold.co/80x80/eeeeee/333333?text=Logo',
    minOrderValue: 20.00
  };
}

