import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

import {Routes, RouterModule} from '@angular/router';

const rotas: Routes = [

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
