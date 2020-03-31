import {RouterModule, Routes} from '@angular/router';
import {IndiaNewsComponent} from './components/india-news/india-news.component';
import {UsNewsComponent} from './components/us-news/us-news.component';
import {EntertainmentComponent} from './components/entertainment/entertainment.component';
import {ScienceComponent} from './components/science/science.component';
import {SportsComponent} from './components/sports/sports.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {BusinessComponent} from './components/business/business.component';
import {HealthComponent} from './components/health/health.component';
import {SingleArticleComponent} from './components/single-article/single-article.component';
import {TamilComponent} from './components/tamil/tamil.component';

const routes: Routes = [
  /*{
    path: '/',
    redirectTo: 'IndiaNewsComponent'
  },*/
  {
    path: 'india-news',
    component: IndiaNewsComponent
  },
  {
    path: 'us-news',
    component: UsNewsComponent
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'news-page',
    component: SingleArticleComponent
  },
  {
    path: 'tamil',
    component: TamilComponent
  }/*,
  {
    path: '/',
    component: IndiaNewsComponent
  }*/
];

export const Approutes = RouterModule.forRoot(routes);
