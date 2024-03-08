import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
