import { Component, Input } from '@angular/core';
import { Weapon } from '../app.component';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css'
})
export class WeaponListComponent {
  @Input() weapons: Weapon[] = []
}
