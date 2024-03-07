import { Component, Input, OnInit } from '@angular/core';
import { Weapon } from '../app.component';
import { WeaponsService } from '../services/weapons.service';
import { Observable } from 'rxjs';
import { WeaponsResults } from '../interfaces/weapon';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css',
})
export class WeaponListComponent implements OnInit {
  public weaponsResults$!: Observable<WeaponsResults>;
  constructor(private service: WeaponsService) {}

  @Input() weapons: Weapon[] = [];
  @Input() title: string = '';

  ngOnInit(): void {
      this.weaponsResults$ = this.service.getWeaponList();
  }
}
