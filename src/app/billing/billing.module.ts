import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { BillingRoutingModule } from './billing-routing/billing-routing.module';
import { HomeComponent } from './home/home.component';
import { AppCommonModule } from '../app-common/app-common.module';

@NgModule({
  declarations: [CreateClaimComponent, HomeComponent],
  imports: [CommonModule, BillingRoutingModule, AppCommonModule],
})
export class BillingModule {}
