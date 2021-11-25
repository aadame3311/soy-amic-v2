import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegacionesProfileComponent } from './delegaciones-profile.component';

describe('DelegacionesProfileComponent', () => {
  let component: DelegacionesProfileComponent;
  let fixture: ComponentFixture<DelegacionesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegacionesProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegacionesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
