import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WeaponsResults } from '../interfaces/weapon';
import { WeaponsAdapterService } from './adapters/weapons-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http: HttpClient, private weaponsAdapterService: WeaponsAdapterService) {}

  getWeaponList(): Observable<WeaponsResults> {
    return this.http.get<WeaponsResults>('https://valorant-api.com/v1/weapons').pipe(map(data => this.weaponsAdapterService.adaptWeaponsData(data)));
  }
}
