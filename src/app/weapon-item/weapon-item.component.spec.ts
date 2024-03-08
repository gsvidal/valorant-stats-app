import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponItemComponent } from './weapon-item.component';

describe('WeaponItemComponent', () => {
  let component: WeaponItemComponent;
  let fixture: ComponentFixture<WeaponItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
