import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {TamilArticle} from '../../model/tamil.article';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent implements OnInit {
  private tamilArtcile: TamilArticle[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getTamilArticle().subscribe(tamil => {
      console.log('tamil varuma');
      this.tamilArtcile = tamil;
    });
  }
}
