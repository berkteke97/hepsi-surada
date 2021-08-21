import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteryComponent } from './registery.component';

describe('RegisteryComponent', () => {
  let component: RegisteryComponent;
  let fixture: ComponentFixture<RegisteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
