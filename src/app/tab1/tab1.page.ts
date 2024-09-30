import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { AnimeService } from '../services/anime.service';
import { HeaderComponent } from '../components/header/header.component';
import { IonCol, IonRow, IonGrid, IonContent, IonSpinner } from '@ionic/angular/standalone';
import { Anime, AnimeResponse } from '../app.interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonCol,IonRow ,IonGrid, IonContent, CommonModule, CardAnimeComponent, HeaderComponent],
})
export class Tab1Page {
  listaAnimes: Anime[] = [];
  load = false;
  constructor(private animeS: AnimeService) {
    addIcons({ heartOutline });
    this.animeS.getTopAnimes().subscribe((resp: AnimeResponse) => {
      console.log(resp.data);
      if (resp) {
        this.load = true;
        this.listaAnimes = resp.data;
      }
    });
  }

}
