import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { ImagesPage } from '../pages/images/images';
import { VideoPage } from '../pages/video/video';
import { BlogPage } from '../pages/blog/blog';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    ContactPage,
    NewsPage,
    ImagesPage,
    VideoPage,
    BlogPage,
    SettingsPage,
    ScrollableTabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    ContactPage,
    NewsPage,
    ImagesPage,
    VideoPage,
    BlogPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
