import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- IMPORTE PARA USAR *ngFor
import { ProductCardComponent } from '../product-card/product-card'; // <-- IMPORTE O CARD

@Component({
  selector: 'app-menu-section',
  standalone: true, // <-- ADICIONE ESTA LINHA
  imports: [
    CommonModule, // <-- ADICIONE AQUI
    ProductCardComponent // <-- E AQUI
  ],
  templateUrl: './menu-section.html', // Já corrigido
  styleUrls: ['./menu-section.css']
})
export class MenuSectionComponent {
  @Input() section: any;
}