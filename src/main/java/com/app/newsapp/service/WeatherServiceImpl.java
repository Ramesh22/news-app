package com.app.newsapp.service;

import com.app.newsapp.model.Weather;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherServiceImpl {

    WeatherServiceImpl() {
    }

    public Weather getDetailedWeather() {
        String url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8f0359187840a95dd2ce9257f7166599";
        JsonNode jsonNode = null;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            jsonNode = objectMapper.readTree(result);
            System.out.println();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println("Yesssssssss " + result);
        return null;
    }

    public Weather getWeatherForCity(String cityName, String cityCode) {

        return null;
    }
}
