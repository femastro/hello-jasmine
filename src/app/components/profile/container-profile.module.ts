import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerProfileRoutingModule } from './container-profile-routing.module';
import { ContainerProfileComponent } from './container-profile.component';
import { CardProfileComponent } from './card/card-profile.component';

import { SearchModule } from '../shared/search/search.module';
import { MakeUrlModule } from 'src/app/pipes/make-url/make-url.module';


@NgModule({
  declarations: [
    ContainerProfileComponent,
    CardProfileComponent,
  ],
  imports: [
    CommonModule,
    ContainerProfileRoutingModule,
    SearchModule,
    MakeUrlModule
  ],
})
export class ContainerProfileModule { }
