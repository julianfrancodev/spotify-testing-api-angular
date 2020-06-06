import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs:any[] = [];

  constructor(private _spotifyService: SpotifyService) {
    
    this._spotifyService.getNewReleases()
      .subscribe((data: any)=>{
        console.log(data.albums.items)
        this.newSongs = data.albums.items;
      })
   }

  ngOnInit(): void {
  }

}
