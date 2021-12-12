import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthenticatedUserComponent } from './un-authenticated-user.component';

describe('UnAuthenticatedUserComponent', () => {
  let component: UnAuthenticatedUserComponent;
  let fixture: ComponentFixture<UnAuthenticatedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAuthenticatedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthenticatedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
