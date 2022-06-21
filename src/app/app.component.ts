import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tokenNames = ['BTC', 'ETH', 'XRP'];
  tokenImagePaths = [
    'assets/images/tokens/1.png',
    'assets/images/tokens/2.jpg',
    'assets/images/tokens/3.png',
  ];

  handleClick() {
    alert('Hello World');
  }
}
