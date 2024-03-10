import { Component, Input } from '@angular/core';
import { Weapon } from '../interfaces/weapon';

interface Stats {
  title: string;
  property: string;
  classModifier: string;
}

@Component({
  selector: 'app-weapon-detail',
  standalone: true,
  imports: [],
  templateUrl: './weapon-detail.component.html',
  styleUrl: './weapon-detail.component.css',
})
export class WeaponDetailComponent {
  @Input() weapon!: Weapon;

  stats: Stats = {
    title: '',
    property: '',
    classModifier: '',
  };
}
