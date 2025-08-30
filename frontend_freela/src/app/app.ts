import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { RestaurantHeaderComponent } from './components/restaurant-header/restaurant-header';
import { MenuSectionComponent } from './components/menu-section/menu-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RestaurantHeaderComponent,
    MenuSectionComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Dados simulados com links de imagem e textos padronizados
  restaurantData = {
    name: 'Nome do Restaurante',
    rating: 4.6,
    // Banner cinza genérico
    bannerUrl: 'https://placehold.co/1200x200/e0e0e0/757575?text=Banner',
    // Logo cinza genérico
    logoUrl: 'https://placehold.co/80x80/cccccc/545454?text=Logo',
    minOrderValue: 20.00
  };

  menuData = [
    {
      title: 'Destaques',
      items: [
        { name: 'Nome do Produto 1', description: 'Descrição resumida do produto para o cliente.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
        { name: 'Nome do Produto 2', description: 'Descrição resumida do produto para o cliente.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
        { name: 'Nome do Produto 3', description: 'Descrição resumida do produto para o cliente.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
        { name: 'Nome do Produto 4', description: 'Descrição resumida do produto para o cliente.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
      ]
    },
    {
      title: 'Promoções',
      items: [
        { name: 'Promoção 1', description: 'Descrição da promoção para chamar atenção.', price: 57.48, imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Promo', layout: 'horizontal' },
        { name: 'Promoção 2', description: 'Descrição da promoção para chamar atenção.', price: 31.48, imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Promo', layout: 'horizontal' },
        { name: 'Promoção 3', description: 'Descrição da promoção para chamar atenção.', price: 77.40, imageUrl: 'https://placehold.co/120x120/f0f0f0/333?text=Promo', layout: 'horizontal' },
      ]
    },
    {
        title: 'Lançamentos',
        items: [
            { name: 'Lançamento 1', description: 'Descrição do novo produto recém-lançado.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
            { name: 'Lançamento 2', description: 'Descrição do novo produto recém-lançado.', imageUrl: 'https://placehold.co/300x150/f0f0f0/333?text=Produto' },
        ]
    }
  ];
}

