import { Component, inject } from '@angular/core';
import { DragonballListComponent } from "../../../components/dragonball-list/dragonball-list.component";
import { DragonballAddComponent } from "../../../components/dragonball-add/dragonball-add.component";
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-page',
  imports: [DragonballListComponent, DragonballAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  public dragonballService = inject(DragonballService);
}
