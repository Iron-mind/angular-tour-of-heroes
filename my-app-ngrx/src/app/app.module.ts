import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { heroReducer } from './reducer/hero.reducer';
import { ROOT_REDUCER } from './state/app.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({name:'my-app-ngrx'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
