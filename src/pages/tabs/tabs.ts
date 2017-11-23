import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NewsPage } from '../news/news';
import { ImagesPage } from '../images/images';
import { VideoPage } from '../video/video';
import { BlogPage } from '../blog/blog';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  homePage = HomePage;
  aboutPage = AboutPage;
  contactPage = ContactPage;
  newsPage = NewsPage;
  imagesPage = ImagesPage;
  videoPage = VideoPage;
  blogPage = BlogPage;
  settingsPage = SettingsPage;

  constructor() {

  }
}
