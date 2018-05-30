import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySuggetionsComponent } from './category-suggetions.component';

describe('CategorySuggetionsComponent', () => {
  let component: CategorySuggetionsComponent;
  let fixture: ComponentFixture<CategorySuggetionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySuggetionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySuggetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
