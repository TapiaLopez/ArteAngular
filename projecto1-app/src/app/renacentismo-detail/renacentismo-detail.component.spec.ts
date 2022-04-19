import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenacentismoDetailComponent } from './renacentismo-detail.component';

describe('RenacentismoDetailComponent', () => {
  let component: RenacentismoDetailComponent;
  let fixture: ComponentFixture<RenacentismoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenacentismoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenacentismoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
