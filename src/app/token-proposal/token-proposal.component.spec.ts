import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenProposalComponent } from './token-proposal.component';

describe('TokenProposalComponent', () => {
  let component: TokenProposalComponent;
  let fixture: ComponentFixture<TokenProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
