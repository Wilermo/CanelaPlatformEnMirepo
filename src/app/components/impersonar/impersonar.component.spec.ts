import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpersonarComponent } from './impersonar.component';

describe('ImpersonarComponent', () => {
  let component: ImpersonarComponent;
  let fixture: ComponentFixture<ImpersonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpersonarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpersonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
