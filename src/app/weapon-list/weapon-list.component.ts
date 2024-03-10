import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeaponsService } from '../services/weapons.service';
import { Observable } from 'rxjs';
import { Weapon, WeaponsResults } from '../interfaces/weapon';
import { AsyncPipe } from '@angular/common';
import { WeaponItemComponent } from '../weapon-item/weapon-item.component';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [AsyncPipe, WeaponItemComponent],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css',
})
export class WeaponListComponent implements OnInit {
  @Input() weaponDetailId!: string
  @Output() setIsBackdropOpen = new EventEmitter<boolean>()
  @Output() setWeapon = new EventEmitter<Weapon>()

  public weaponsResults$!: Observable<WeaponsResults>;
  constructor(private service: WeaponsService) {}

  ngOnInit(): void {
    this.weaponsResults$ = this.service.getWeaponList();
  }

  hoveredWeaponId: string | null = '';

  handleWeaponHoverId(id: string) {
    this.hoveredWeaponId = id;
  }

  clearHover() {
    this.hoveredWeaponId = null;
  }

  // weaponClicked!: Weapon

  handleClickWeapon(weapon: Weapon) {
    console.log(weapon.id)
    this.weaponDetailId = weapon.id;
    this.setBackdrop(true)
    this.setWeaponClicked(weapon)
    // this.weaponClicked = {...weapon}
  }

  setBackdrop(val: boolean) {
    this.setIsBackdropOpen.emit(val)
  }

  setWeaponClicked(weapon: Weapon) {
    this.setWeapon.emit(weapon)
  }
}
