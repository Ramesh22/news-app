package com.app.newsapp.controller;

import com.app.newsapp.model.Article;
import com.app.newsapp.model.TamilArticle;
import com.app.newsapp.service.NewsServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class NewsController {

    private NewsServiceImpl newsService;

    @Autowired
    public NewsController(NewsServiceImpl newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/news/article")
    public List<Article> getArticle() {
        return newsService.sendGoogleNews();
    }

    @GetMapping("/news/us")
    public List<Article> getUsArticle() {
        return newsService.sendUsNews();
    }

    @GetMapping("/news/science")
    public List<Article> getSciencetArticles() {
        return newsService.sendScienceNews();
    }

    @GetMapping("/news/business")
    public List<Article> getBusinessArticles() {
        return newsService.sendBusinessNews();
    }

    @GetMapping("/news/entertainment")
    public List<Article> getEntertainmentArticles() {
        return newsService.sendEntertainmentNews();
    }

    @GetMapping("/news/health")
    public List<Article> getHealthArticles() {
        return newsService.sendHealthNews();
    }

    @GetMapping("/news/sports")
    public List<Article> getSportsArticles() {
        return newsService.sendSportsNews();
    }

    @GetMapping("/news/technology")
    public List<Article> getTechnologyArticles() {
        return newsService.sendTechnologyNews();
    }

    @GetMapping("/tamil")
    public List<TamilArticle> getTamilArticle() throws JsonProcessingException {
        return newsService.getTamilArticle();
    }
}
