import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopicsInCategoryComponent } from './all-topics-in-category.component';

describe('AllTopicsInCategoryComponent', () => {
  let component: AllTopicsInCategoryComponent;
  let fixture: ComponentFixture<AllTopicsInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTopicsInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTopicsInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
