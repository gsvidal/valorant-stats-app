import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

export interface Weapon {
  id: number;
  name: string;
  timeToReload: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'valorant-app';
  weapons: Weapon[] = [
    {
      id: 1,
      name: 'odin',
      timeToReload: '5',
    },
    {
      id: 2,
      name: 'vandal',
      timeToReload: '1.2',
    },
  ];
}
