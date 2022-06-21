import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-token-card',
  templateUrl: './token-card.component.html',
  styleUrls: ['./token-card.component.scss'],
})
export class TokenCardComponent implements OnInit {
  @Input()
  tokenName: string = '';
  @Input()
  tokenImagePath: string = '';

  constructor() {}

  ngOnInit(): void {}
}
