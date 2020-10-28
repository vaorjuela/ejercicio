import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechasPipe } from './pipes/fechas.pipe';
import { TextoPipe } from './pipes/texto.pipe';
import { NumeroPipe } from './pipes/numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FechasPipe,
    TextoPipe,
    NumeroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
