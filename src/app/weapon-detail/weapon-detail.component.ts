import { Component, Input } from '@angular/core';
import { Weapon } from '../interfaces/weapon';
import { CommonModule } from '@angular/common';

interface Stats {
  title: string;
  property: string;
  classModifier: string;
}

@Component({
  selector: 'app-weapon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-detail.component.html',
  styleUrl: './weapon-detail.component.css',
})
export class WeaponDetailComponent {
  @Input() weapon!: Weapon;

  stats: Stats[] = [
    {
      title: 'Fire rate (rps)',
      property: 'fireRate',
      classModifier: 'fire-rate',
    },
    {
      title: 'Equip time (s)',
      property: 'equipTimeSeconds',
      classModifier: 'equip-time',
    },
    {
      title: 'Reload time (s)',
      property: 'reloadTimeSeconds',
      classModifier: 'reload-time',
    },
    {
      title: 'Wall Penetration',
      property: 'wallPenetration',
      classModifier: 'wall-penetration',
    },
    {
      title: 'Zoom Multiplier',
      property: 'zoomMultiplier',
      classModifier: 'zoom-multiplier',
    },
    {
      title: 'First Bullet Accuracy',
      property: 'firstBulletAccuracy',
      classModifier: 'first-bullet-accuracy',
    },
  ];

  getSectorStyle(index: number) {
    const angle = index * (360 / this.stats.length);
    return {
      transform: `rotate(${angle}deg) skew(30deg)`,
    };
  }
  // skew - stats.length
  // 30 - 6 (360/6 / 2)
  // 45 - 8 (360/8)
  // 60 - 12 (360/12 * 2)

  displayWeaponStat(statValue: number | string | null): number | string {
    if (statValue && typeof statValue === 'number' && statValue > 0) {
      return this.formatStat(statValue);
    } else if (statValue && typeof statValue === 'string') {
      return statValue;
    } else {
      return '-';
    }
  }

  formatStat = (data: number): number => {
    return parseFloat(data?.toFixed(2));
  };
}
