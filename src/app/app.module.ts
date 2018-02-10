import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsuarioService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
