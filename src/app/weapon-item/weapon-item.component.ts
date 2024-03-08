import { Component, Input } from '@angular/core';
import { Weapon } from '../interfaces/weapon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapon-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-item.component.html',
  styleUrl: './weapon-item.component.css'
})
export class WeaponItemComponent {
  @Input() weapon!: Weapon
  @Input() hoveredWeaponId!: string
}
