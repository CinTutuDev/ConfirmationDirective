import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationPanelDirective } from './confirmation-panel.directive';
import { MyButtonComponent } from './my-button/my-button.component';


@NgModule({
  declarations: [AppComponent, MyButtonComponent, ConfirmationPanelDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
