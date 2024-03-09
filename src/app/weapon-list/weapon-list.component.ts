import { Component, Input, OnInit } from '@angular/core';
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
}
