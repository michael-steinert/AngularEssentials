import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-box',
  templateUrl: './token-box.component.html',
  styleUrls: ['./token-box.component.scss'],
})
export class TokenBoxComponent implements OnInit {
  constructor(public tokenService: TokenService) {}

  ngOnInit(): void {}
}
