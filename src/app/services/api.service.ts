import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharacters(params: any) {
    return this.http.get(env.api_base_url + env.character, { params });
  }

  getCharacterById(characterId: string) {
    return this.http.get(env.api_base_url + env.character + characterId);
  }

  getInfoByUrl(url: string) {
    return this.http.get(url);
  }
}
