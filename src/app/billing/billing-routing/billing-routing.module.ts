import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateClaimComponent } from '../create-claim/create-claim.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'create-claim', component: CreateClaimComponent },
  { path: '', component: HomeComponent },
];

export const BillingRoutingModule = RouterModule.forChild(routes);
