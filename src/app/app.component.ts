import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { Weapon } from './interfaces/weapon';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponListComponent, WeaponDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  weaponDetailId: string | null = '';
  isBackdropOpen: boolean = false;
  weaponClicked!: Weapon;

  handleBackdrop(value: boolean) {
    // console.log(value);
    this.isBackdropOpen = value;
    // console.log(this.isBackdropOpen);
  }

  handleClickOnWeapon(weapon: Weapon) {
    // console.log(weapon);
    this.weaponClicked = { ...weapon };
    console.log(this.weaponClicked);
  }
}
