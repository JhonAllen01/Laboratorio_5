import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SeguridadModule } from './seguridad/seguridad.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SeguridadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
