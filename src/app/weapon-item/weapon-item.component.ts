import { Component, Input } from '@angular/core';
import { Weapon } from '../interfaces/weapon';
import { CommonModule } from '@angular/common';
import { WeaponDetailComponent } from '../weapon-detail/weapon-detail.component';

@Component({
  selector: 'app-weapon-item',
  standalone: true,
  imports: [CommonModule, WeaponDetailComponent],
  templateUrl: './weapon-item.component.html',
  styleUrl: './weapon-item.component.css',
})
export class WeaponItemComponent {
  @Input() weapon!: Weapon;
  @Input() hoveredWeaponId!: string;
  @Input() weaponDetailId!: string;
}
