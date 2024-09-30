import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FavoritesService } from '../services/favorites.service';
import { CardAnimeComponent } from '../components/card-anime/card-anime.component';
import { addIcons } from 'ionicons';
import {  heartOutline } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonGrid,IonRow, IonContent, IonCol, HeaderComponent,CardAnimeComponent],
})
export class Tab3Page {
  constructor(private favoriteS: FavoritesService) {
    addIcons({heartOutline})
    this.favorites
  }

  get favorites(){
    return this.favoriteS.getLocalFavorites;
  }
}
