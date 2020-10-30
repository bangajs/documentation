import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './shared/terminal/terminal.component';
import { GeneratorComponent } from './shared/generator/generator.component';
import { ProtestBannerComponent } from './shared/protest-banner/protest-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    GeneratorComponent,
    ProtestBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
