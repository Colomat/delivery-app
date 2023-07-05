import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { DetalleAlimentoComponent } from './detalle-alimento/detalle-alimento.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentosComponent,
    DetalleAlimentoComponent
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
