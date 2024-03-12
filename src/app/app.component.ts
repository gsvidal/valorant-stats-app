import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { Weapon, WeaponSkin } from './interfaces/weapon';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WeaponListComponent,
    WeaponDetailComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  weaponDetailId: string | null = '';
  isBackdropOpen: boolean = false;
  weaponClicked!: Weapon;
  skinIndex: number | null = null;
  skinsLength: number = 0;

  handleBackdrop(value: boolean) {
    this.isBackdropOpen = value;
  }

  handleClickOnWeapon(weapon: Weapon) {
    this.weaponClicked = { ...weapon };
    this.skinsLength = this.weaponClicked?.skins?.length;
  }

  handlePreviousSkin() {
    if (this.skinIndex !== null && this.skinIndex > 0) {
      this.skinIndex -= 1;
    } else if(this.skinIndex === null) {
      this.skinIndex = this.skinsLength - 1;
    } else if(this.skinIndex === 0) {
      this.skinIndex = null;
    }
  }

  handleNextSkin() {
    if (this.skinIndex !== null && this.skinIndex < this.skinsLength - 1) {
      this.skinIndex += 1;
    } else if(this.skinIndex === null) {
      this.skinIndex = 0;
    } else if(this.skinIndex === this.skinsLength - 1) {
      this.skinIndex = null;
    }
  }
}
