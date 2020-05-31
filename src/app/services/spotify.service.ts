import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }



  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCuHQkfI4BgafpLK-903XXRh7zhR4E4DcUOEJejLvGQCmesX7mYIh19aUDc1Rk3Ohq-d701WnaEvBzzac4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      
  }
}
