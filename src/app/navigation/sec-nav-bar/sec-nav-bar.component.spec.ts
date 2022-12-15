import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecNavBarComponent } from './sec-nav-bar.component';

describe('SecNavBarComponent', () => {
  let component: SecNavBarComponent;
  let fixture: ComponentFixture<SecNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
