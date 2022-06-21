import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-proposal',
  templateUrl: './token-proposal.component.html',
  styleUrls: ['./token-proposal.component.scss'],
})
export class TokenProposalComponent implements OnInit {
  tokenNames = ['LTC', 'SOL', 'LINK'];
  tokenDescriptions = ['Litecoin', 'Solana', 'ChainLink'];
  tokenImagePaths = [
    'assets/images/tokens/4.png',
    'assets/images/tokens/5.jpg',
    'assets/images/tokens/6.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
