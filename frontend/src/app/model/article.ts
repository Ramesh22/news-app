// tslint:disable-next-line:class-name
export class Article {
  public author: string;
  public title: string;
  public description: string;
  public urlToImage: string;
  public publishedAt: string;
  public content: string;
  public url: string;

  constructor(author: string, title: string, description: string, urlToImage: string, publishedAt: string, content: string, url: string) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
    this.url = url;
  }
}
