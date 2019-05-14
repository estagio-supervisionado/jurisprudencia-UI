import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbListModule
} from "@nebular/theme";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ResultadoComponent } from './paginas/resultado/resultado.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './paginas/resultado/placeholder/placeholder.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, ResultadoComponent, PlaceholderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
