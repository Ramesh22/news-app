import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {Article} from '../../model/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-india-news',
  templateUrl: './india-news.component.html',
  styleUrls: ['./india-news.component.css']
})
export class IndiaNewsComponent implements OnInit {
  private article: Article[];
  private headOneArticle: Article;
  private headTwoArticle: Article;

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.newsService.getIndiaArticles().subscribe((articles: Article[]) => {
      this.headOneArticle = articles[0];
      this.headTwoArticle = articles[1];
      this.article = articles;
      this.article.splice(0, 2);
    });
  }

  getArticle(oneArticle: Article) {
    console.log('Article coming' + oneArticle.title);
    // @ts-ignore
    this.router.navigate('/news-page', [oneArticle]);
  }

  getOneArticle(singleArticle: Article) {
    console.log('Single Article');
    // @ts-ignore
    this.router.navigate('/news-page');
  }
}
