import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-profile',
  templateUrl: './token-profile.component.html',
  styleUrls: ['./token-profile.component.scss'],
})
export class TokenProfileComponent implements OnInit {
  @Input()
  tokenName: string = 'BTC';
  @Input()
  tokenDescription: string = 'Bitcoin';
  @Input()
  tokenImagePath: string = 'assets/images/tokens/1.png';
  @Input()
  canFavorite: boolean = true;

  constructor(public tokenService: TokenService) {}

  ngOnInit(): void {}
}
