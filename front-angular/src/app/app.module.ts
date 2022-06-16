import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppimgComponent } from './appimg/appimg.component';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { AppcontactComponent } from './appcontact/appcontact.component';
import { EntreprisesComponent } from './entreprise/entreprises/entreprises.component';
import { PrestationsComponent } from './prestation/prestations/prestations.component';
import { SignupComponent } from './app-authorization/signup/signup.component';
import { LoginComponent } from './app-authorization/login/login.component';
import { AppPrestationsComponent } from './app-prestations/app-prestations.component';
import { AppPrestatairesComponent } from './app-prestataires/app-prestataires.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppimgComponent,
    AppcarouselComponent,
    AppcontactComponent,
    EntreprisesComponent,
    PrestationsComponent,
    AppcarouselComponent,
    LoginComponent,
    SignupComponent,
    PrestationsComponent,
    AppPrestationsComponent,
    AppPrestatairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
