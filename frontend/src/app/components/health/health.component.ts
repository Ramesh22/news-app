import {Component, OnInit} from '@angular/core';
import {Article} from '../../model/article';
import {NewsService} from '../../services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  private article: Article[];

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.newsService.getHealthArticles().subscribe((articles: Article[]) => {
      console.log('Lets see : ' + articles[0].title);
      this.article = articles;
    });
  }

  getArticle(oneArticle: Article) {
    console.log('Article coming' + oneArticle.title);
    // @ts-ignore
    this.router.navigate('/news-page', [oneArticle]);
  }
}
