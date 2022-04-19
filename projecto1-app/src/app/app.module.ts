import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RomanticismoComponent } from './romanticismo/romanticismo.component';
import { RenacentismoComponent } from './renacentismo/renacentismo.component';
import { RenacentismoDetailComponent } from './renacentismo-detail/renacentismo-detail.component';
import { RomanticismoDetailComponent } from './romanticismo-detail/romanticismo-detail.component';
import { NavigatorComponent } from './core/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RomanticismoComponent,
    RenacentismoComponent,
    RenacentismoDetailComponent,
    RomanticismoDetailComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
