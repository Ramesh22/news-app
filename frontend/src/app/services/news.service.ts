import {Injectable} from '@angular/core';
import {Article} from '../model/article';
import {HttpClient} from '@angular/common/http';
import {TamilArticle} from '../model/tamil.article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  endPoints: string;

  constructor(private httpClient: HttpClient) {
    this.endPoints = 'http://localhost:8080';
  }

  getIndiaArticles() {
    const url = '/news/article';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getUsNewsArticles() {
    const url = '/news/us';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getEntertainmentArticles() {
    const url = '/news/entertainment';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getScienceArticles() {
    const url = '/news/science';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getSportsArticles() {
    const url = '/news/sports';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getTechnologyArticles() {
    const url = '/news/technology';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getBusinessArticles() {
    const url = '/news/business';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getHealthArticles() {
    const url = '/news/health';
    return this.httpClient.get<Article[]>(this.endPoints + url);
  }

  getTamilArticle() {
    const url = '/tamil';
    return this.httpClient.get<TamilArticle[]>(this.endPoints + url);
  }
}
