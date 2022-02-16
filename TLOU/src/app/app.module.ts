import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { TeamComponent } from './team/team.component';
import { StoreComponent } from './store/store.component';
import { Routes } from '@angular/router';
import { ContentfulService } from 'src/contentful.service';
import { LightboxModule } from 'ngx-lightbox';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// import * as Hammer from 'hammerjs';

// export class CustomHammerConfig extends HammerGestureConfig{
//   overrides = {
//     'pan': {
//       direction: Hammer.DIRECTION_ALL,
//     }
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MediaComponent,
    TeamComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    AppRoutingModule,

    LightboxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  