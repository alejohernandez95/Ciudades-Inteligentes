import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps} from "@ionic-native/google-maps"
import { Provedor1Provider } from '../providers/provedor1/provedor1';
import {HttpClientModule} from '@angular/common/http'

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyAstNBS-EZZR6CvGAT4E8B3ECREmRQFVWs",
  authDomain: "ciudadesinteligentes-de2f3.firebaseapp.com",
  databaseURL: "https://ciudadesinteligentes-de2f3.firebaseio.com",
  projectId: "ciudadesinteligentes-de2f3",
  storageBucket: "ciudadesinteligentes-de2f3.appspot.com",
  messagingSenderId: "257305970935"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provedor1Provider,

  ]
})
export class AppModule {}



