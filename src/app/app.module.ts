import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { NewExclusiveComponent } from './new-exclusive/new-exclusive.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { OfficialStuffComponent } from './official-stuff/official-stuff.component';
import { InstagramsComponent } from './instagrams/instagrams.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCategoriesComponent,
    NewExclusiveComponent,
    MostPopularComponent,
    OfficialStuffComponent,
    InstagramsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
