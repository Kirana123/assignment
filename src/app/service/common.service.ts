import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userId: any;

  constructor(private readonly http: HttpClient,
    private router: Router) {
  }

  getBrewers(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getSearchbyCity(city){
    return this.http.get('https://api.openbrewerydb.org/breweries?by_city=' + city);
  }

  getSearchbyName(name){
    return this.http.get('https://api.openbrewerydb.org/breweries?by_name=' + name);
  }

  getSearchbyState(state){
    return this.http.get('https://api.openbrewerydb.org/breweries?by_state=' + state);
  }

  getSortbyasc(){
    return this.http.get('https://api.openbrewerydb.org/breweries?name:asc');
  }

  getSortbydesc(){
    return this.http.get('https://api.openbrewerydb.org/breweries?sort=name:desc');
  }

}
