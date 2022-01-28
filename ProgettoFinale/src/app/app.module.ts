import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientiComponent } from './clienti/clienti.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
//import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { ClientiDetailComponent } from './clienti-detail/clienti-detail.component';
import { AddClientiComponent } from './add-clienti/add-clienti.component';
import { FormsModule } from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';
import { FattureComponent } from './fatture/fatture.component';
import { FattureDetailComponent } from './fatture-detail/fatture-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientiComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientiDetailComponent,
    AddClientiComponent,
    NewClientComponent,
    FattureComponent,
    FattureDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    /*{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,
  }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
