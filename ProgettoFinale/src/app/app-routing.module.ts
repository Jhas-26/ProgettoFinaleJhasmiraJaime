import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientiComponent } from './add-clienti/add-clienti.component';
import { ClientiDetailComponent } from './clienti-detail/clienti-detail.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureDetailComponent } from './fatture-detail/fatture-detail.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeComponent } from './home/home.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'clienti/:id', component: ClientiDetailComponent },
  { path: 'clienti/:id/addClienti', component: AddClientiComponent },
  { path: 'aggiungiClient', component: NewClientComponent },
  { path: 'Fatture', component: FattureComponent },
  { path: 'fatture/:id', component: FattureDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
