import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Article} from '../../model/article';
import {Weather} from '../../model/weather';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private weather: Weather;
  private article: Article[];
  private headOneArticle: Article;
  private headTwoArticle: Article;

  date: Date;

  constructor(private weatherService: WeatherService, private newsService: NewsService) {
    console.log('Date varum');
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.weatherService.getWeatherReport().subscribe((weatherArticle: Weather) => {
      this.weather = weatherArticle;
      console.log('ena varum');
    });
    this.newsService.getIndiaArticles().subscribe((articles: Article[]) => {
      this.headOneArticle = articles[0];
      this.headTwoArticle = articles[1];
      this.article = articles;
      this.article.splice(0, 2);
    });
  }
}
