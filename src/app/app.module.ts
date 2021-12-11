import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Tarea: (HECHA)
// Crear un módulo llamado ContadorModule
// realizar las declaraciones y exportaciones

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
