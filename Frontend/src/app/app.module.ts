import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NewCatComponent } from './new-cat/new-cat.component';
import { NewItemComponent } from './new-item/new-item.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewCatComponent,
    NewItemComponent,
    UpdateCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
