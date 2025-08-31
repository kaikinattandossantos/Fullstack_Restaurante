import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importe o componente filho que você quer usar
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  // 2. Adicione o ProductCardComponent aos imports
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './menu-section.html',
  styleUrls: ['./menu-section.css']
})
export class MenuSectionComponent {
  @Input() section: any;
}