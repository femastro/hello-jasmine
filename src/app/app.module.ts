import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerProfileModule } from './components/profile/container-profile.module';
import { SearchModule } from './components/shared/search/search.module';

import { MakeUrlModule } from './pipes/make-url/make-url.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ContainerProfileModule,
    AppRoutingModule,
    SearchModule,
    MakeUrlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
