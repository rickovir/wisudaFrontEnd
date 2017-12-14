import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebaaComponent } from './homebaa.component';

describe('HomebaaComponent', () => {
  let component: HomebaaComponent;
  let fixture: ComponentFixture<HomebaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
