import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // <-- Adicionado para tornar o componente independente
  imports: [],      // <-- Array de imports, necessário para standalone
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

}
