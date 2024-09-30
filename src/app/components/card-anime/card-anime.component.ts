import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IonIcon, IonCard,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-anime',
  standalone: true,
  imports: [IonIcon, IonCard, IonButton],
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss'],
})
export class CardAnimeComponent  {
  @Input({required: true}) animeInfo:any = {
  };
  constructor(
    private route: Router,
    private favoriteS: FavoritesService
  ) { }
  addToFavorite(anime:any){
    this.favoriteS.addFavorite(anime);
  }
  inFavorite(id: any){
    if(this.favoriteS.inFavorite(id)){
      return 'heart'
    } else {
      return 'heart-outline'
    }
  }
  verDetalles(id: number){
    console.log('verDetalles', id);
    this.route.navigateByUrl('/anime/' + id);
  }

}
