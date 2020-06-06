import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }



  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARdRUguaV4IGAkzfysuUb2hvIUIEnYHe7-X4dJBTnbZkNlc3kL-thB0raXJcWbrCSBPK5-L_ygF3Yb5Vw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      
  }
}
