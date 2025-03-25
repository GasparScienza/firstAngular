import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dragonball-list',
  imports: [],
  templateUrl: './dragonball-list.component.html',
  styleUrl: './dragonball-list.component.css'
})
export class DragonballListComponent {
  characters = input.required<Character[]>()
  listName = input.required<string>()

  limpiarLista() {
    localStorage.clear()
  }
}
