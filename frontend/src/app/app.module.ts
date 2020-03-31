import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './services/news.service';
import {IndiaNewsComponent} from './components/india-news/india-news.component';
import {UsNewsComponent} from './components/us-news/us-news.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {Approutes} from './app.route';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ScienceComponent} from './components/science/science.component';
import {BusinessComponent} from './components/business/business.component';
import {HealthComponent} from './components/health/health.component';
import {EntertainmentComponent} from './components/entertainment/entertainment.component';
import {SportsComponent} from './components/sports/sports.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {SingleArticleComponent} from './components/single-article/single-article.component';
import {WeatherComponent} from './components/weather/weather.component';
import {WeatherService} from './services/weather.service';
import {TamilComponent} from './components/tamil/tamil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaNewsComponent,
    UsNewsComponent,
    HeaderComponent,
    FooterComponent,
    ScienceComponent,
    BusinessComponent,
    HealthComponent,
    EntertainmentComponent,
    SportsComponent,
    TechnologyComponent,
    SingleArticleComponent,
    WeatherComponent,
    TamilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    Approutes,
    MatCardModule,
    MatGridListModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [NewsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
