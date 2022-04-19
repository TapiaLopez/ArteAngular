import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticismoDetailComponent } from './romanticismo-detail.component';

describe('RomanticismoDetailComponent', () => {
  let component: RomanticismoDetailComponent;
  let fixture: ComponentFixture<RomanticismoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticismoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticismoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
