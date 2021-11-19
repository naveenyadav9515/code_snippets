import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodComponent } from './testmod.component';

describe('TestmodComponent', () => {
  let component: TestmodComponent;
  let fixture: ComponentFixture<TestmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
