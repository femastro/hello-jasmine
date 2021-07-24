import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerProfileRoutingModule } from './container-profile-routing.module';
import { ContainerProfileComponent } from './container-profile.component';
import { CardProfileComponent } from './card/card-profile.component';
import { MakeUrlPipe } from 'src/app/pipes/make-url.pipe';


@NgModule({
  declarations: [
    ContainerProfileComponent,
    CardProfileComponent,
    MakeUrlPipe,
  ],
  imports: [
    CommonModule,
    ContainerProfileRoutingModule
  ],
  exports:[CardProfileComponent, MakeUrlPipe,]
})
export class ContainerProfileModule { }
