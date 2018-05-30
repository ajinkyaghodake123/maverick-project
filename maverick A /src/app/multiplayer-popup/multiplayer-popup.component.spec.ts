import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerPopupComponent } from './multiplayer-popup.component';

describe('MultiplayerPopupComponent', () => {
  let component: MultiplayerPopupComponent;
  let fixture: ComponentFixture<MultiplayerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplayerPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
