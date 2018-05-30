import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministartionComponent } from './administartion.component';

describe('AdministartionComponent', () => {
  let component: AdministartionComponent;
  let fixture: ComponentFixture<AdministartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
