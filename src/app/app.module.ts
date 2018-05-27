import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Necessário para o Auth0
import { IonicStorageModule } from '@ionic/storage';
import { AuthService} from '../services/auth.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './../services/produto';
import { ContactPageModule } from '../pages/contact/contact.module';
import { ContactFormService } from '../services/contact-form-service';
import { ThankyouPageModule } from '../pages/thankyou/thankyou.module';
import { DetailsPageModule } from '../pages/details/details.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DetailsPageModule,
    ContactPageModule,
    ThankyouPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProdutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ContactFormService
  ]
})
export class AppModule {}
