import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenProfileComponent } from './token-profile.component';

describe('TokenProfileComponent', () => {
  let component: TokenProfileComponent;
  let fixture: ComponentFixture<TokenProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
