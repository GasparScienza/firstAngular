import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.component.html',
  styleUrl: './dragonball-add.component.css'
})
export class DragonballAddComponent {
  name = signal('Piccoro');
  power = signal(0);
  newCharacter = output<Character>()

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000000),
      name: this.name(),
      power: this.power()
    }
    this.newCharacter.emit(newCharacter);
    this.reset();
  }
  reset() {
    this.name.set('')
    this.power.set(0)
  }
}
