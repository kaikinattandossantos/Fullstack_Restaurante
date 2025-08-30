import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, // <-- Adicionado para tornar o componente independente
  imports: [],      // <-- Array de imports, necessário para standalone
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

}
