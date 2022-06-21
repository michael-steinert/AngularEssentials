import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TokenCardComponent } from './token-card/token-card.component';
import { TokenProposalComponent } from './token-proposal/token-proposal.component';
import { TokenProfileComponent } from './token-profile/token-profile.component';
import { TokenBoxComponent } from './token-box/token-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TokenCardComponent,
    TokenProposalComponent,
    TokenProfileComponent,
    TokenBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
