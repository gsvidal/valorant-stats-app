import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeaponsService } from '../services/weapons.service';
import { Observable, tap, throwError } from 'rxjs';
import { Weapon, WeaponsResults } from '../interfaces/weapon';
import { AsyncPipe } from '@angular/common';
import { WeaponItemComponent } from '../weapon-item/weapon-item.component';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [AsyncPipe, WeaponItemComponent],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css',
})
export class WeaponListComponent implements OnInit {
  @Input() weaponDetailId!: string;
  @Output() setIsBackdropOpen = new EventEmitter<boolean>();
  @Output() setWeapon = new EventEmitter<Weapon>();
  @Output() setWeapons = new EventEmitter<Weapon[]>();
  @Output() isLoadingChange = new EventEmitter<boolean>(); // Emit loading state changes

  public weaponsResults$!: Observable<WeaponsResults>;
  constructor(private service: WeaponsService) {}

  ngOnInit(): void {
    this.weaponsResults$ = this.service.getWeaponList().pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching weapons:', error);
        return throwError(() => error.error);
      })
    );

    this.weaponsResults$.subscribe((weaponsResults) => {
      this.setAllWeapons(weaponsResults.data); // Assign data on success
    });
  }

  hoveredWeaponId: string | null = '';

  handleWeaponHoverId(id: string) {
    this.hoveredWeaponId = id;
  }

  clearHover() {
    this.hoveredWeaponId = null;
  }

  handleClickWeapon(weapon: Weapon) {
    console.log(weapon);
    this.weaponDetailId = weapon.id;
    this.setBackdrop(true);
    this.setWeaponClicked(weapon);
  }

  setBackdrop(val: boolean) {
    this.setIsBackdropOpen.emit(val);
  }

  setWeaponClicked(weapon: Weapon) {
    this.setWeapon.emit(weapon);
  }

  setAllWeapons(weapons: Weapon[]) {
    this.setWeapons.emit(weapons);
  }
}
