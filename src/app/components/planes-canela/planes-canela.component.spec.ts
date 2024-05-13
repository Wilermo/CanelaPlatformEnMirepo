import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesCanelaComponent } from './planes-canela.component';

describe('PlanesCanelaComponent', () => {
  let component: PlanesCanelaComponent;
  let fixture: ComponentFixture<PlanesCanelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanesCanelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesCanelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
