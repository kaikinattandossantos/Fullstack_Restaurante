import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importe para usar *ngIf

@Component({
  selector: 'app-product-card',
  standalone: true,  // <-- Adicionado para tornar o componente independente
  imports: [
    CommonModule   // <-- Adicione aqui para poder usar *ngIf e *ngFor no template
  ],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() item: any;
}
