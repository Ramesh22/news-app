package com.app.newsapp.service;

import com.app.newsapp.model.Article;
import com.app.newsapp.model.TamilArticle;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class NewsServiceImpl extends MappingJackson2HttpMessageConverter implements com.app.newsapp.service.NewsService {

    JsonNode jsonNode = null;

    public NewsServiceImpl() throws UnirestException {
        /*Article article = new Article();
        HttpResponse<String> response = Unirest.post("https://newsapiraygorodskijv1.p.rapidapi.com/getArticles")
                .header("x-rapidapi-host", "NewsAPIraygorodskijV1.p.rapidapi.com")
                .header("x-rapidapi-key", "766c80b69amsh524c7bd143d8c67p1f0611jsn6882da3484d7")
                .header("content-type", "application/x-www-form-urlencoded")
                .asString();
        System.out.println(response);*/
    }

    public List<Article> sendGoogleNews() {
        String url = "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendUsNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendScienceNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendBusinessNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendEntertainmentNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = new ArrayList<>();
        articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendHealthNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendSportsNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    public List<Article> sendTechnologyNews() {
        String url = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4b943ab260a44f50a204b635de6a71b4";
        List<Article> articleList = fetchNewsArticles(url);
        return articleList;
    }

    private List<Article> fetchNewsArticles(String url) {
        List<Article> articleList = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            jsonNode = objectMapper.readTree(result);
        } catch (JsonProcessingException e) {
            System.out.println(e.getMessage());
        }
        if (jsonNode.get("status").textValue().contains("ok")) {
            jsonNode.get("articles").forEach(articles -> {
                Article newsArticle = new Article();
                newsArticle.setAuthor(articles.get("author").textValue());
                newsArticle.setTitle(articles.get("title").textValue());
                newsArticle.setPublishedAt(articles.get("publishedAt").textValue());
                newsArticle.setUrlToImage(articles.get("urlToImage").textValue());
                newsArticle.setDescription(articles.get("description").textValue());
                newsArticle.setContent(articles.get("content").textValue());
                newsArticle.setUrl(articles.get("url").textValue());
                articleList.add(newsArticle);
            });
        }
        return articleList;
    }

    public List<TamilArticle> getTamilArticle() throws JsonProcessingException {
        String url = "https://gnews.io/api/v3/top-news?lang=ta&token=a49fc2a3f626991db99ef020c7001b1e";
        List<TamilArticle> tamilArticleList = new ArrayList<>();

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        jsonNode = objectMapper.readTree(result);
        jsonNode.get("articles").forEach(articles -> {
            TamilArticle tamilArticle = new TamilArticle();
            tamilArticle.setTitle(articles.get("title").textValue());
            tamilArticle.setDescription(articles.get("description").textValue());
            tamilArticle.setUrl(articles.get("url").textValue());
            tamilArticle.setPublishedAt(articles.get("publishedAt").textValue());
            tamilArticleList.add(tamilArticle);
        });
        return tamilArticleList;
    }

    //
    public List<Article> getRapidNews() throws UnirestException {
        Article article = new Article();
        List<Article> articleList = new ArrayList<>();
        HttpResponse<String> response = Unirest.post("https://newsapiraygorodskijv1.p.rapidapi.com/getArticles")
                .header("x-rapidapi-host", "NewsAPIraygorodskijV1.p.rapidapi.com")
                .header("x-rapidapi-key", "766c80b69amsh524c7bd143d8c67p1f0611jsn6882da3484d7")
                .header("content-type", "application/x-www-form-urlencoded")
                .asString();
        System.out.println(response);
        return articleList;
    }
}
