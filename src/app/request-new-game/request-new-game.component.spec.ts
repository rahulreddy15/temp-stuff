import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewGameComponent } from './request-new-game.component';

describe('RequestNewGameComponent', () => {
  let component: RequestNewGameComponent;
  let fixture: ComponentFixture<RequestNewGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});