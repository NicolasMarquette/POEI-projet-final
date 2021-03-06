import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppPrestatairesComponent } from './app-prestataires/app-prestataires.component';
import { AppPrestationsComponent } from './app-prestations/app-prestations.component';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { AppcontactComponent } from './appcontact/appcontact.component';
import { AppimgComponent } from './appimg/appimg.component';
import { EntreprisesComponent } from './entreprise/entreprises/entreprises.component';
import { PrestationsComponent } from './prestation/prestations/prestations.component';
import { LoginComponent } from './app-authorization/login/login.component';
import { SignupComponent } from './app-authorization/signup/signup.component';
import { LogoutComponent } from './app-authorization/logout/logout.component';
import { RecapcommandeComponent } from './commande/recapcommande/recapcommande.component';

const routes: Routes = [
  { path: 'index', component: AppcarouselComponent },
  { path: 'appheader', component: AppHeaderComponent },
  { path: 'appfooter', component: AppFooterComponent },
  { path: 'appimg', component: AppimgComponent },
  { path: 'appcontact', component: AppcontactComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'app-prestations', component: AppPrestationsComponent },
  { path: 'prestataires', component: AppPrestatairesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'recapcommande', component: RecapcommandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
