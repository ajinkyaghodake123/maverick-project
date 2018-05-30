import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameManagerPopupComponent } from './game-manager-popup.component';

describe('GameManagerPopupComponent', () => {
  let component: GameManagerPopupComponent;
  let fixture: ComponentFixture<GameManagerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameManagerPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameManagerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
