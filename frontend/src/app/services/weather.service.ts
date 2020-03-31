import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  endPoints: string;

  constructor(private httpClient: HttpClient) {
    this.endPoints = 'http://localhost:8080';
  }

  public getWeatherReport() {
    const url = '/weather/report';
    return this.httpClient.get<Weather>(this.endPoints + url);
  }

  public getWeatherReportForCity() {

  }
}
