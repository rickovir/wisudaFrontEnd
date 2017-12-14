import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbaaComponent } from './loginbaa.component';

describe('LoginbaaComponent', () => {
  let component: LoginbaaComponent;
  let fixture: ComponentFixture<LoginbaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginbaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
