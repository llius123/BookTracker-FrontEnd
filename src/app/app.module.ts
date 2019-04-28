import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { ServicesModule } from './services/services.module';
import { AuthGuard } from './auth/auth-guard.service';
import { BusquedaComponent } from './components/index/busqueda/busqueda.component';
import { ResultadoComponent } from './components/index/resultado/resultado.component';
import { GoodreadsComponent } from './components/index/resultado/goodreads/goodreads.component';
import { GooglebooksComponent } from './components/index/resultado/googlebooks/googlebooks.component';
import { BooktrakerComponent } from './components/index/resultado/booktraker/booktraker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    BusquedaComponent,
    ResultadoComponent,
    GoodreadsComponent,
    GooglebooksComponent,
    BooktrakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
