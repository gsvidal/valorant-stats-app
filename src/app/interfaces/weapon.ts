export interface WeaponStats {
  [key: string]: number | string | null;
  fireRate: number | null;
  equipTimeSeconds: number | null;
  reloadTimeSeconds: number | null;
  wallPenetration: string | null;
  zoomMultiplier: number | null;
  firstBulletAccuracy: number | null;
}

export interface WeaponSkin {
  [key: string]: number | string | null;
  id: string;
  name: string;
  image: string;
}

export interface Weapon {
  id: string;
  name: string;
  imageList: string;
  imageDetail: string;
  category: string;
  stats: WeaponStats;
  skins: WeaponSkin[];
}

export interface WeaponsResults {
  status: number;
  data: Weapon[];
}
