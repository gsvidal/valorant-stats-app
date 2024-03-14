import { Injectable } from '@angular/core';
import {
  Weapon,
  WeaponSkin,
  WeaponStats,
  WeaponsResults,
} from '../../interfaces/weapon';

@Injectable({
  providedIn: 'root',
})
export class WeaponsAdapterService {
  constructor() {}

  getStatSlice = (stat: string): string => {
    return stat?.split('::')?.slice(-1)[0];
  };



  adaptWeaponsData(dataFromBackend: any): WeaponsResults {
    const frontendData: WeaponsResults = {
      status: dataFromBackend.status,
      data: dataFromBackend.data.map((weapon: any): Weapon => ({
        id: weapon.uuid,
        name: weapon.displayName,
        imageList: weapon.shopData?.newImage,
        imageDetail: weapon.displayIcon,
        category: this.getStatSlice(weapon.category),
        stats: {
          fireRate: weapon.weaponStats?.fireRate || null,
          equipTimeSeconds: weapon.weaponStats?.equipTimeSeconds || null,
          reloadTimeSeconds: weapon.weaponStats?.reloadTimeSeconds || null,
          wallPenetration:
            this.getStatSlice(weapon.weaponStats?.wallPenetration) || null,
          zoomMultiplier: weapon.weaponStats?.adsStats?.zoomMultiplier || null,
          firstBulletAccuracy: weapon.weaponStats?.firstBulletAccuracy || null
        },
        skins: weapon.skins.map((skin: any): WeaponSkin => ({
          id: skin.uuid,
          name: skin.displayName,
          image: skin.displayIcon,
        })),
      })),
    };
    console.log(frontendData);
    return frontendData;
  }
}
