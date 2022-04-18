import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
