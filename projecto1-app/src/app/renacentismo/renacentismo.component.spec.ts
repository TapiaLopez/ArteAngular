import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenacentismoComponent } from './renacentismo.component';

describe('RenacentismoComponent', () => {
  let component: RenacentismoComponent;
  let fixture: ComponentFixture<RenacentismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenacentismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenacentismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
