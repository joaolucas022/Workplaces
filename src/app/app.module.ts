import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationsListComponent } from './locations/locations-list.component';
import { PhoneNumberPipe } from './shared/phone-number-pipe.pipe';

@NgModule({
  declarations: [AppComponent, LocationsListComponent, PhoneNumberPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
