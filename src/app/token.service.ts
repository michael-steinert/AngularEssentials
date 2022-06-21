import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  tokenNames: string[] = [];
  tokenDescriptions: string[] = [];
  tokenImagePaths: string[] = [];

  constructor() {}

  addToken(
    tokenName: string,
    tokenDescription: string,
    tokenImagePath: string
  ) {
    this.tokenNames.push(tokenName);
    this.tokenDescriptions.push(tokenDescription);
    this.tokenImagePaths.push(tokenImagePath);
  }
}
