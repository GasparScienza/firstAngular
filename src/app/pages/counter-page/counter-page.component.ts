import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  count: number = 0;

  incrementar() {
    this.count += 1;
  }
  decrementar() {
    this.count -= 1;
  }
  resetear() {
    this.count = 0;
  }
}
