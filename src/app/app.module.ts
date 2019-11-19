import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PhoneBookComponent } from './pages/phone-book/phone-book.component';
import { ProductsComponent } from './pages/products/products.component'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'
import { MatTableModule } from '@angular/material/table';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { ngxUiLoaderConfig } from  './preloader-config';
import { OrderModule } from 'ngx-order-pipe';
import { FiltersPipe } from './shared/pipes/filters.pipe'

import { TextMaskModule } from 'angular2-text-mask'

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhoneBookComponent,
    ProductsComponent,
    HeaderComponent,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    OrderModule,
    TextMaskModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdeGZYmHCLxPE6JJh8QLmyJQypt9iyiP8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
