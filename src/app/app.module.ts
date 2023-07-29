import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/home/navegador.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ContatoComponent } from './componentes/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    QuemSomosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
