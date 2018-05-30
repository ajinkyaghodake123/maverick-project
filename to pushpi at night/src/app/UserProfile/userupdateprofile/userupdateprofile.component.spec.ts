import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdateprofileComponent } from './userupdateprofile.component';

describe('UserupdateprofileComponent', () => {
  let component: UserupdateprofileComponent;
  let fixture: ComponentFixture<UserupdateprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserupdateprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserupdateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
