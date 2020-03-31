package com.app.newsapp.controller;

import com.app.newsapp.model.Weather;
import com.app.newsapp.service.WeatherServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class WeatherController {

    WeatherServiceImpl weatherService;

    @Autowired
    WeatherController(WeatherServiceImpl weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather/report")
    public Weather getWeatherReport() {
        Weather weather = weatherService.getDetailedWeather();
        return weather;
    }
}
