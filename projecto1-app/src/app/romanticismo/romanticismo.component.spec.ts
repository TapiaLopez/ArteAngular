import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticismoComponent } from './romanticismo.component';

describe('RomanticismoComponent', () => {
  let component: RomanticismoComponent;
  let fixture: ComponentFixture<RomanticismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
